// Esta función se ejecutará cuando se envíe el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita la recarga de la página
    // Para asegurar que el JS se esté ejecutando
    console.log("La función validarFormulario se está ejecutando.");
    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("emailUsuario").value;
    var contraseña1 = document.getElementById("pass1").value;
    var contraseña2 = document.getElementById("pass2").value;

    // Comprueba si el campo "nombre" está vacío
    if (nombre === "") {
        alert("Por favor, ingrese su nombre de usuario.");
        return false; // Evita que el formulario se envíe
    }

    // Comprueba si el campo "email" está vacío
    if (email === "") {
        alert("Por favor, ingrese su dirección de correo electrónico.");
        return false;
    }

    // Comprueba si uno de los campos de contraseña está vacío
    if (contraseña1 === "" || contraseña2 === "") {
        alert("Por favor, complete ambos campos de contraseña.");
        return false;
    }

    // Comprueba si las contraseñas ingresadas coinciden
    if (contraseña1 !== contraseña2) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Si llegamos a este punto, todas las validaciones pasaron
    mostrarMensajeDeExito(); // Llama a la función para mostrar el mensaje de éxito.
    return true; // Envía el formulario si todo es válido
}






// Después de enviar el formulario con éxito, muestra un mensaje en la página.
function mostrarMensajeDeExito() {
    // Crea un elemento para el mensaje.
    alert("Registro exitoso. ¡Bienvenido!");
    window.location.href = "index.html"; // Redirección 
    
}


// Agrega un "escuchador" para el evento "submit" del formulario
var form = document.getElementById("formIngreso");
form.addEventListener("submit", function(event) {
    validarFormulario(event);
});