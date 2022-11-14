let datos = {};

function showMyProfile() {


  let miPerfil = `
<div class="container">
      <br>
      <div class="row">
       <div class="col">
       <h2>Perfil</h2>
       </div>
        <div class="col">
         <img src="img/img_perfil.png" alt="img perfil predeterminada" id="imgPerfil">
        </div>
      </div>      
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
      <div class="row">
        <div class="mb-3">
          <label for="imagPerfil" class="form-label">Imagen de perfil</label>
          <input class="form-control" type="file" id="imagPerfil">
        </div>
      </div>
      <br>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" id="guardar">Guardar cambios</button>
      </div>
    </div>
`
  document.getElementById("formulario").innerHTML = miPerfil



};



document.addEventListener("DOMContentLoaded", function () {

  acceso(); // funcion que verifica si esta logeado, sino redirige a index

  showMyProfile(); /// Muestro todos los input vacios, salvo email




  ///// ACA GUARDO TODOS LOS DATOS DE LOS CAMPOS//////

  document.getElementById("guardar").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let segundoNombre = document.getElementById("segundoNombre").value;
    let apellido = document.getElementById("apellido").value;
    let segundoApellido = document.getElementById("segundoApellido").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;


    /// construyo un objeto con los datos como atributos ... 
    datos = {
      nombre: `${nombre}`,
      segundoNombre: `${segundoNombre}`,
      apellido: `${apellido}`,
      segundoApellido: `${segundoApellido}`,
      email: `${email}`,
      tel: `${tel}`,


    };

    //// paso los datos a string para guardarlos en localstorage
    let perfil = JSON.stringify(datos);
    localStorage.setItem("perfil", perfil);




  });


});



(function () {


  // Funcion boostrap 5 validaciones
  var forms = document.querySelectorAll('.needs-validation')


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
})();

/// Muestro el perfil con los datos que guarde

document.addEventListener("DOMContentLoaded", function () {

  //// obtengo los datos del local

  perfil = localStorage.getItem("perfil");

  /// tranformo el json que estaba en string en objto para utilizarlo
  let misDatos = JSON.parse(perfil);
  console.log(misDatos);

  console.log(perfil);
  console.log(misDatos);

  let perfilCompleto = `
  <div class="container">
   <br>
    <div class="row">
      <div class="col">
        <h2>Perfil</h2>
      </div>
      <div class="col">
       <img src="img/img_perfil.png" alt="img perfil predeterminada" id="imgPerfil">
      </div>
  </div>
      <div class="row">
        <div class="col">
          <label for="nombre" class="form-label">Nombre<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="text" class="form-control" id="nombre" value="${misDatos.nombre}" aria-label="Nombre" required>
          <div class="invalid-feedback">
            Falta completar campo!
          </div>
        </div>
        <div class="col">
          <label for="segundoNombre" class="form-label">Segundo nombre</label>
          <input type="text" class="form-control" id="segundoNombre" value="${misDatos.segundoNombre}" aria-label="Segundo nombre">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="apellido" class="form-label">Apellido<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="text" class="form-control" id="apellido"  value="${misDatos.apellido}" aria-label="Apelldio" required>
        </div>
        <div class="col">
          <label for="segundoApellido" class="form-label">Segundo Apellido</label>
          <input type="text" class="form-control" id="segundoApellido"  value="${misDatos.segundoApellido}" aria-label="Segundo Apellido">
        </div>
      </div>
      <div class="row">
        <div class="col">          
          <label for="email" class="form-label">Email<abbr title="required"
            aria-label="required">*</abbr></label>
          <input type="email" class="form-control" id="email" aria-label="Email" value="${misDatos.email}" required>
        </div>           
        <div class="col">
          <label for="tel" class="form-label">Número de contacto</label>
          <input type="tel" class="form-control" id="tel" value="${misDatos.tel}" aria-label="Tel">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="mb-3">
          <label for="imagPerfil" class="form-label">Imagen de perfil</label>
          <input class="form-control" type="file" id="imagPerfil">
        </div>
      </div>
      <br>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" id="guardar">Guardar cambios</button>
      </div>
    </div>
  `
  document.getElementById("formulario").innerHTML = perfilCompleto
})