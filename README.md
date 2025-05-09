
# Enhanced website

Live link: https://user-experience-enhanced-website-m6o9.onrender.com/

## Desktop
<img width="1510" alt="Scherm­afbeelding 2025-05-09 om 09 51 19" src="https://github.com/user-attachments/assets/6b7a17f4-adba-466e-a1e8-14017ed57593" />

## Mobile
<img width="572" alt="Scherm­afbeelding 2025-05-09 om 09 51 31" src="https://github.com/user-attachments/assets/a75ee0f2-5a2d-424a-ae3b-3a27a0b7fe1c" />

## Inleiding
Deze ledenpagina is onderdeel van mijn website waar gebruikers op leden kunnen klikken om meer gedetailleerde informatie te bekijken op een aparte detailpagina. De website is responsive en maakt gebruik van een mobiele-first aanpak.

Op de leden pagina staat een overzicht van alle leden van dat moment. Per lid staat er een naam van het bedrijf, de plaats en aantal werknemers. Ook is er een mogelijkheid om naar de detailpagina te gaan als je op de details link klikt om meer informatie van het bedrijf te zien. 

De website is mobile first gebouwd. Op het kleinste formaat is het een one-column-layout. Hoe groter de pagina word, hoe meer leden cards er naast elkaar komen, de max is 3 naast elkaar

Lighthouse: De pagina scoort 100 punten op alle onderdelen van de lighthouse.
<img width="580" alt="Image" src="https://github.com/user-attachments/assets/414e150d-62a1-4cc1-9890-471e4bab0638" />

## Ontwerpkeuzes
-Kleurgebruik: Voor de website gebruik ik alleen maar zwart en wit. De linkjes zijn blauw wat zorgt voor een goede feedforward omdat iedereen dan weet waar je op kunt klikken. De zwart wit kleuren zorgen voor een strakke uitstraling. Het einge kleur komt van de afbeeldingen van de bedrijven.
-Typografie: ik hou vast aan 2 soorten lettertypes. De typografie heb ik vooraf gestyled in de stylesheet. De groote van de typografie schaalt mee op basis van schermgroote omdat ik clamp heb gebruikt. De koppen zijn vetgedrukt zodat ze extra opvallen. 
-Consistente UI: De dunne zwarte borders op de website zorgen ervoor dat alles in hokjes te verdelen valt zo weet je precies wat waarbij hoort. Per sectie heb ik een border-top en border-bottom meegegeven om de secties uit elkaar te houden.
-Branding: het logo van dda staat in de header en in de footer en heeft de zelfde zwart wit style als de rest van de website. Het logo heb ik ook mee laten schalen op basis van schermgroote met clamp zodat hij op elk apparaat goed te zien is.
## Gebruik
Als gebruiker, wil ik een overzicht kunnen zien van alle leden die onder Dutch Digital Agency vallen. Ik zie alvast wat belangrijke informatie en ik kan op een link klikken om meer informatie te lezen over het specifieke bedrijf. Dit is mogelijk door het responsive design wat de leden laat zien in een grid, met snelle informatie over de leden en een mogelijkheid om meer informatie te lezen op de detailpagina.

Als opdrachtgever wil ik een nieuw lid kunnen toevoegen, zodat mensen up to date blijven over welke leden er onder Dutch Digital Agency vallen. Ik kan dit gemakkelijk doen, door op "lid toevoegen" te klikken. Hier vul ik de belangrijke informatie in over het lid en krijg feedback of het lid geplaats is.

## Kenmerken

De website is een dynamische, responsive & mobile first website. Gemaakt met Liquid.JS, Node.JS, JavaScript en CSS. De website is dynamisch door het ophalen van de data uit de database.

Deze spint heb ik verschillende onderdelen gemaakt: 

-Dynamische paginatitel: ik gebruik Liquid om een dynamische titel toe te voegen. Dit is goed voor de duidelijkheid voor de gebruiker. https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/views/partials/head.liquid#L9-L12

-Responsive header met hamburgermenu: ik heb een responisve header gemaakt met op mobile een hamburgermenu die opent en sluit met javascript en zonder javascript. Met javascript door addEventListener en zonder javascipt door :target. 
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/views/partials/head.liquid#L15-L50

https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/styles/main.css#L492-L557
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/scripts/script.js#L16-L32

-Oneindige logocarrousel: ik heb een herhalende slide gemaakt met partnerlogo’s. Die doormiddel van een animatie door het beeld beweegt.

https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/views/partials/foot.liquid#L2-L27

https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/styles/main.css#L328-L380


-Succes message: ik laat een pop-up 3 seconden verschijnen als bevestiging. Dit zorgt voor een betere gebruikerservaring.
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/styles/main.css#L396-L413
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/views/leden.liquid#L115-L117


-Loading state: zodra het formulier wordt verstuurd, komt er een loader spinner. Zodra de fetch klaar is, verdwijnt de spinner en zie je het weer normaal.
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/styles/main.css#L382-L395

-Multi-page transition: ik heb op de namen van de bedrijven op de overzichtspagina en detailspagina een morph effect gezet als je van pagina switcht.
https://github.com/Brancovanbeek/user-experience-enhanced-website/blob/a471a2db6375083beb787dd30b7835aad467e13a/public/styles/stylesheet.css#L1-L6



## Installatie

Zoals beschreven bij Kenmerken is bij dit project gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal npm install uit om alle benodigdheden te installeren.

Voer vervolgens npm start uit om de server te starten.

Ga in je browser naar http://localhost:8000 om het project te bekijken.













This project is licensed under the terms of the [MIT license](./LICENSE).
