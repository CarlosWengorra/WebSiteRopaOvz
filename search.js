document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const searchTerm = input.value.toLowerCase();

        // Reemplaza esta línea con el enlace correcto a la página de resultados
        const searchPageURL = 'ruta_de_tu_pagina_de_resultados.html?search=' + encodeURIComponent(searchTerm);
        
        // Redirecciona a la página de resultados
        window.location.href = searchPageURL;
    });
});
