const url_carBuy = CART_INFO_URL + "25801" + EXT_TYPE;



function showCarUser() {

    let car = carUser.articles[0];


    let liCar = `
    <div class="container">
    <h1 class="text-center">Carrito de compras</h1>

    <h2 class="especial">Artículos a comprar</h2>

    <div class="row" id="table">

        <div class="col">

        </div>

        <div class="col">
            <p>Nombre</p>
        </div>
        <div class="col">
            <p>Costo</p>
        </div>

        <div class="col">
            <p>Cantidad</p>
        </div>
        <div class="col-1"></div>
        <div class="col">
            <p>Subtotal</p>
        </div>

    </div>
    <div class="row" id="table2">

        <div class="col">
            <img src="${car.image}" alt="img-prod" class="img-thumbnail">
        </div>

        <div class="col">
            <p>${car.name}
            <p>
        </div>
        <div class="col">
            <p>${car.currency}${car.unitCost}</p>
        </div>

        <div class="col">

            <input type="number" name="numero" id="numero" min="1" value="${car.count}"
                class="input-group has-validation" required>


            <div class="invalid-feedback">
                La cantidad no puede ser menor a 1!
            </div>
        </div>

        <div class="col-1"><strong>${car.currency}</strong></div>
        <div class="col" id="subT">

            <p id="subTotal"> ${car.unitCost}</p>

        </div>

    </div>
    `


    document.getElementById("carrito").innerHTML += liCar;



};



////// gurde el dato en el addEventListener/// Lo obtengo aca a traves de una variable global
let sTGeneral = parseInt(localStorage.getItem("subTotalGen"));
//console.log(typeof (sTGeneral))


document.addEventListener("DOMContentLoaded", function () {

    acceso(); // funcion que verifica si esta logeado, sino redirige a index

    getJSONData(url_carBuy).then(function (resultObj) {
        //console.log(url_carBuy);
        if (resultObj.status === "ok") {
            carUser = resultObj.data;
            // console.log(carUser);
            showCarUser();



        };

        //// MUESTRO SUBTOTAL LLAMANDO A LA FUNCION CANTIDADPRECIO
        document.getElementById("numero").addEventListener("input", function () {

            cantidadPrecio(); // funcion que calcula sub total
            console.log(cantidadPrecio());

            document.getElementById("subTotal").innerHTML = cantidadPrecio();


        });




    })

    document.getElementById("contenedor").addEventListener("input", function () {
        /////LAS FUNCIONES QUE LLAMO ACA ESTAN ABAJO///
        ////////MUESTRO CANTIDAD COSTO LLAMANDO A UNA FUNCION///////
        let subTotal = cantidadPrecio();
        localStorage.setItem("subTotalGen", subTotal);  //guardo dato de subtotal

        let costo = `
            <div>${sTGeneral}</div>
             `
        document.getElementById("subTotalGeneral").innerHTML = costo;



        ////////MUESTRO COSTO ENVIO LLAMANDO A UNA FUNCION/////

        let costEnvio = `
            <div>${costoEnvio(sTGeneral)}</div>
            `
        document.getElementById("costoEnvio").innerHTML = costEnvio;


        ///////MUESTRO TOTALES LLAMANDO A UNA FUNCION////
        let total = `
        <div>${totales()}</div>
        `

        document.getElementById("total").innerHTML = total
    });


});


function cantidadPrecio() {
    let cantidad = document.getElementById("numero").value;
    let precio = carUser.articles[0].unitCost;
    return cantidad * precio
}

function costoEnvio(sTGeneral) {
    let envio1 = document.getElementById("envio1");
    let envio2 = document.getElementById("envio2");
    let envio3 = document.getElementById("envio3");
    if (envio1.checked) {
        return sTGeneral * (0.15)
    }
    if (envio2.checked) {
        return sTGeneral * (0.07)
    }
    if (envio3.checked) {
        return sTGeneral * (0.5)
    }
}
function totales() {
    return sTGeneral + costoEnvio(sTGeneral);
}



// https://www.arkaitzgarro.com/javascript/capitulo-16.html
// https://codigoroot.net/blog/3-formas-de-deshabilitar-inputs-html-rapido-y-sencillo-con-javascript-y-atributos-html/ 
/// ultimo link saque ide ade disabled = true

////////////////////////////// ESTO ES PARA EL MODAL PARA DESHABILITAR CAMPOS////////////////


let checked1 = document.getElementById("tarjetaCred");
let checked2 = document.getElementById("transBanco");
let numCuenta = document.getElementById("numCuenta");
let nTarjeta = document.getElementById("nTarjeta");
let codSeguridad = document.getElementById("codSeguridad");
let date = document.getElementById("date");

////// Esta funcion la llamo en un onchange en los checked//// 

function valFormaPago() {
    if (checked1.checked) {
        numCuenta.disabled = true;
        nTarjeta.disabled = false;
        codSeguridad.disabled = false;
        date.disabled = false;
    }
    if (checked2.checked) {
        numCuenta.disabled = false;
        nTarjeta.disabled = true;
        codSeguridad.disabled = true;
        date.disabled = true;
    }
}




(function () {

    ////validacion formulario

    var forms = document.querySelectorAll('.needs-validation')


    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (evento) {

                if (!form.checkValidity()) {
                    evento.preventDefault()
                    evento.stopPropagation()
                }
                ///// validacion del boton que abre el modal

                if (form.checkValidity()) {
                    if ((!checked1.checked) && (!checked2.checked)) {
                        evento.preventDefault()
                        document.getElementById("validarModal").innerHTML = "Falta elegir forma de pago";
                        document.getElementById("validarPago").innerHTML = "Falta elegir forma de pago";

                    } else {
                        alert("completo con exito la operacion")
                    }

                }



                form.classList.add('was-validated')

            }, false)
        })
})();

//////// funcion para validar el modal

(function () {

    var modal = document.querySelectorAll('.needs-validation-modal')
    let valModal = document.getElementById("modalPago")


    Array.prototype.slice.call(modal)
        .forEach(function (valModal) {
            valModal.addEventListener('input', function (evento) {


                if ((checked2.checked) && (numCuenta.value == "")) {
                    console.log(numCuenta);
                    evento.preventDefault()
                    evento.stopPropagation()
                    document.getElementById("validarTrans").innerHTML = "Falta completar campo";
                    document.getElementById("validarModal").innerHTML = "Falta completar campos en forma de pago"


                } if (checked1.checked || checked2.checked) {
                    document.getElementById("validarModal").innerHTML = "";
                    document.getElementById("validarPago").innerHTML = "";
                }
                if ((checked1.checked) && ((nTarjeta.value && codSeguridad.value && date.value) == "")) {
                    evento.preventDefault()
                    evento.stopPropagation()

                    document.getElementById("validarTarjeta").innerHTML = "Falta completar campos";
                    document.getElementById("validarModal").innerHTML = "Falta completar campos en forma de pago";


                }
                if ((checked1.checked) && ((nTarjeta.value && codSeguridad.value && date.value) !== "")) {


                    document.getElementById("validarTarjeta").innerHTML = "";
                    document.getElementById("validarModal").innerHTML = "";


                }
                if ((checked2.checked) && (numCuenta.value !== "")) {


                    document.getElementById("validarTrans").innerHTML = "";
                    document.getElementById("validarModal").innerHTML = "";


                }



                valModal.classList.add('was-validated')

            }, false)
        })
})();







