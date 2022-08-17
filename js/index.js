/*function showAlertSuccess () {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError () {
    document.getElementById("alert-error").classList.add("show");
}*/

function validacion() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if ((email !== "") && (password !== "")) {
        return true;
    } else {
        return alert ("Faltan ingresar datos");
    }
}

document.getElementById ("redirigir").addEventListener("click",validacion); // quedo la validacion, pero cuando le doi ok al alert me redirige

function redirigir(){
    location.replace ("https://angelahelo.github.io/proyecto-jap/portada.html")
  }

  const button = document.getElementById("redirigir");

  button.addEventListener ("click",redirigir); // saque la idea de video js manejar eventos

//document.getElementById("regBtn").addEventListener("click", validacion);