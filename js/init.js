const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

function setProdInfo(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"
}

////// FUNCION DE ACCESO////// 

// Si no esta logeado no puede acceder, lo puse aca asi llamo a la funcion en las paginas que no quieron que
//accedan si no estan logeados... Lo puse en la pagina Cart (carrito) y en la pagina de mi perfil (my-profile)

function acceso() {
  if (localStorage.getItem("usuario") == undefined) {
    alert("Para ingresar debe estar logeado");
    window.location = "index.html";
  };
}

/// FUNCION PARA PASAR EL LOCALSOTRAGE COMO VALUE

function miEmail() {
  let email = localStorage.getItem("usuario");
  return email
 
}


/* funcion para poner nombre en la barra */

document.addEventListener("DOMContentLoaded", function () {     /* Cuando carga la pag se da el evento*/
  nombreUsuario = localStorage.getItem("usuario");              /* obtengo el dato del usuario*/

  document.getElementById("usuario").innerHTML += nombreUsuario;


})



