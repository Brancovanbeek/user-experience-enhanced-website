// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// homepage
app.get('/', async function (request, response) {
  // Render index.liquid uit de Views map
  response.render('index.liquid'  )
})

// lid detail pagina
app.get('/leden/lid/:id', async function (request, response) {
  
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies/' + request.params.id)
  const apiResponseJSON = await apiResponse.json() 

  response.render('lid.liquid', { lidDetails: apiResponseJSON.data });
})


app.get('/leden', async function (request, response) {
  // Verkrijg de filters uit de queryparameters
  const { provincie, omvang, sorteren } = request.query;

  // Basis URL voor de API-aanroep
  let apiUrl = 'https://fdnd-agency.directus.app/items/dda_agencies';

  // Als een provincie is opgegeven, voeg die toe aan de filter
  if (provincie && provincie !== '') {
    apiUrl += `?filter[province_string][_eq]=${provincie}`;
  }

  // Als sorteren is opgegeven, voeg dat toe
  if (sorteren && sorteren !== '') {
    const connector = apiUrl.includes('?') ? '&' : '?';
    if (sorteren === 'az') {
      apiUrl += `${connector}sort=title`;
    } else if (sorteren === 'za') {
      apiUrl += `${connector}sort=-title`;
    } else if (sorteren === 'colleagues') {
      apiUrl += `${connector}sort=colleagues`;
    }
  }

  // Haal de data op van de API
  const apiResponse = await fetch(apiUrl);
  const apiResponseJSON = await apiResponse.json();

  // Render de data naar de view
  response.render('leden.liquid', {leden: apiResponseJSON.data});
});


app.post('/leden/nieuw/toevoegen/', async function (request, response) {
  console.log("ontvangen body:", request.body)
  await fetch('https://fdnd-agency.directus.app/items/dda_agencies', {
        method: 'POST',
        body: JSON.stringify({
          title: request.body.title,
          address: request.body.address,
          colleagues: request.body.colleagues,
        }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
      response.redirect(303, '/leden?success=Lid is toegevoegd!');
})


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})
