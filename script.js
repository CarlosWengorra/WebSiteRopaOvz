document.addEventListener('DOMContentLoaded', function() {
    console.log('El DOM está cargado.');

    // Seleccionar todas las imágenes dentro de las tarjetas
    const imagenes = document.querySelectorAll('.img-cont');

    // Agregar un evento de clic a cada imagen
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            // Obtener el contenedor padre de la imagen (la tarjeta)
            const tarjeta = imagen.closest('.tarjeta');

            // Obtener la descripción de la tarjeta
            const descripcion = tarjeta.querySelector('.descripcion');

            // Verificar si la descripción está visible
            const descripcionVisible = descripcion.style.display !== 'none';

            // Alternar la visibilidad de la descripción
            if (descripcionVisible) {
                descripcion.style.display = 'none';
            } else {
                descripcion.style.display = 'block';
            }
        });
    });
});



imagen.addEventListener('click', function() {
    console.log('Clic en la imagen');
    const tarjeta = imagen.closest('.tarjeta');
    const descripcion = tarjeta.querySelector('.descripcion');
    descripcion.classList.toggle('oculto');
});




