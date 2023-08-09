 // Obtener referencias a los elementos del formulario
 const form = document.getElementById("login-form");
 const usernameInput = document.getElementById("username");
 const passwordInput = document.getElementById("password");

 // Agregar un evento de escucha al envío del formulario
 form.addEventListener("submit", function(event) {
   event.preventDefault(); // Evitar que se envíe el formulario de manera predeterminada
   
   // Obtener los valores de usuario y contraseña
   const usernameValue = usernameInput.value;
   const passwordValue = passwordInput.value;

   // Realizar las validaciones deseadas
   if (usernameValue === "" || passwordValue === "") {
     alert("Por favor, complete todos los campos.");
   } else {
     // Realizar alguna acción, como enviar los datos al servidor
     // Aquí puedes agregar tu lógica personalizada
     alert("Inicio de sesión exitoso.");
   }
 });
