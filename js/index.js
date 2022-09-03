
function validacion() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if ((email !== "") && (password !== "")) {
        localStorage.setItem("usuario",email);
    
        return window.location.href = "portada.html"; //antes habia hecho una funcion para redirigir. Si se cumple redirige
    } else {
        return alert ("Faltan ingresar datos"); // si no se cumple lo anterior sale el alert y no redirige
    }
}


document.getElementById("redirigir").addEventListener("click",validacion); // en el navegador me sale con error??



    

