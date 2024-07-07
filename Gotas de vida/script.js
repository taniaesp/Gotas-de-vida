document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar el manejo del formulario, como validaciones adicionales o envío de datos a un servidor.
    
    alert('Gracias por contactarnos, ' + document.getElementById('name').value + '. Nos pondremos en contacto contigo pronto.');
    
    // Limpiar el formulario después de enviar
    document.getElementById('contactForm').reset();
});
