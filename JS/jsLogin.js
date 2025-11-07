document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('.formulario');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // valores del formulario de inicio de sesión
        const emailInput = document.getElementById('usuario').value;
        const passwordInput = document.getElementById('contraseña').value;

        // llama los datos del usuario desde localStorage
        const usuarioAlmacenado = localStorage.getItem('usuarioRegistrado');

        if (usuarioAlmacenado) {
            const usuarioData = JSON.parse(usuarioAlmacenado);

            // Comparar las credenciales
            if (emailInput === usuarioData.email && passwordInput === usuarioData.contraseña) {
                // guarda el nombre completo para usarlo en la otra página
                localStorage.setItem("usuarioLogueado", `${usuarioData.nombre} ${usuarioData.apellido}`);

                // redirigir al usuario a su página de clases
                window.location.href = '../HTML/clases.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos.');
            }
        } else {
            alert('No hay usuarios registrados. Por favor, regístrate primero.');
        }
    });

});