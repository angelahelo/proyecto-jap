/// FUNCION PARA PASAR EL LOCALSOTRAGE COMO VALUE

function miEmail() {
  let miEmail = localStorage.getItem("usuario");

  return miEmail;


}

function showMyProfile() {
  let miPerfil = `
<div class="container">
      <h2>Perfil</h2>
      <br>
      <br>
      <div class="row">
        <div class="col">
          <label for="nombre" class="form-label">Nombre<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="text" class="form-control" id="nombre" aria-label="Nombre" required>
          <div class="invalid-feedback">
            Falta completar campo!
          </div>
        </div>
        <div class="col">
          <label for="segundoNombre" class="form-label">Segundo nombre</label>
          <input type="text" class="form-control" id="segundoNombre" aria-label="Segundo nombre">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="apellido" class="form-label">Apellido<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="text" class="form-control" id="apellido" aria-label="Apelldio" required>
        </div>
        <div class="col">
          <label for="segundoApellido" class="form-label">Segundo Apellido</label>
          <input type="text" class="form-control" id="segundoApellido" aria-label="Segundo Apellido">
        </div>
      </div>
      <div class="row">
        <div class="col">          
          <label for="email" class="form-label">Email<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="email" class="form-control" id="email" aria-label="Email" value="${miEmail()}" required>
        </div>           
        <div class="col">
          <label for="tel" class="form-label">Número de contacto</label>
          <input type="tel" class="form-control" id="tel" aria-label="Tel">
        </div>
      </div>
      <br>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" id="guardar">Guardar cambios</button>
      </div>
    </div>
`
  document.getElementById("formulario").innerHTML += miPerfil
};


function showData (){

};

document.addEventListener("DOMContentLoaded", function () {

  acceso(); // funcion que verifica si esta logeado, sino redirige a index

  showMyProfile();


  ///// ACA GUARDO TODOS LOS DATOS DE LOS CAMPOS//////
  document.getElementById("guardar").addEventListener("click", function () { 
    let nombre = document.getElementById("nombre").value;
    let segundoNombre = document.getElementById("segundoNombre").value;
    let apellido = document.getElementById("apellido").value;
    let segundoApellido = document.getElementById("segundoApellido").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;



    if (nombre !== undefined) {

      localStorage.setItem("nombre", nombre);
      window.location = "my-profile.html"

    }

    if (segundoNombre !== undefined) {
      localStorage.setItem("segundoNombre", segundoNombre);
      window.location = "my-profile.html"
    }

    if (apellido !== undefined) {
      localStorage.setItem("apellido", apellido);
      window.location = "my-profile.html"

    }

    if (segundoApellido !== undefined) {
      localStorage.setItem("segundoApellido", segundoApellido);
      window.location = "my-profile.html"
    }

    if (email !== undefined) {
      localStorage.setItem("email", email);
      window.location = "my-profile.html"
    }

    if (tel !== undefined) {
      localStorage.setItem("tel", tel);
      window.location = "my-profile.html"
    }

  });



});



(function () {


  // Funcion boostrap 5 validaciones
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        if (form.checkValidity()) { // con este if no envio el formulario.. pero tengo las validaciones con bootstrap
          event.preventDefault()
          event.stopPropagation()
        }


        form.classList.add('was-validated');


      }, false);

    })
})()