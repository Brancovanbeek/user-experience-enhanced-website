document.addEventListener('DOMContentLoaded', function () {
    const searchInputs = document.querySelectorAll('input[type="text"][id="search"]'); 

    searchInputs.forEach(search => {
        search.addEventListener('input', function () {
            const searchValue = this.value.toLowerCase();
            const leden = document.querySelectorAll('.leden-card-grid section');

            leden.forEach(lid => {
                const title = lid.querySelector('h3').textContent.toLowerCase();
                lid.style.display = title.includes(searchValue) ? '' : 'none';
            });
        });
    });
});

