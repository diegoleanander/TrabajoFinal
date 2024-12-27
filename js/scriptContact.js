const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos el envío real del formulario

    Swal.fire({
        title: 'Message sent!',
        text: `Thank you for your message! We will contact you as soon as possible.`,
        icon: 'success',
        confirmButtonText: 'close'
    });

});