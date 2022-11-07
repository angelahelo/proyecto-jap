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
            
            <input type="number" name="numero" id="numero" min="1" value="${car.count}" class= "input-group has-validation" required>
            <span onchange="setCantidad(this.value)"></span>
                
                      <div class="invalid-feedback">
                        La cantidad no puede ser menor a 1! 
                      </div>

        </div>
        <div class="col-1"><strong>${car.currency}</strong></div>
        <div class="col" id="subT">

            <p id="subTotal"> ${car.unitCost}</p>

        </div>


    </div>

</div>
    `
    //console.log(typeof (this.value));
    //puse en el input value= para que me quede precargado el valor....

    document.getElementById("carrito").innerHTML += liCar;



};

function setCantidad(value) {   // esto no hace nada... PONERLO EN EL INPUT SACAR EL ONCHANGES
    localStorage.setItem("cantidad", value);
    window.location = "cart.html";

}

/* function subTotalGeneral (){
   let subTotal = localStorage.getItem("subTotal");
   console.log(subTotal);
    
    

    document.getElementById("subTotalGeneral").innerHTML = subTotal;

}
 */





/* function costoEnvio(){

}  */

document.addEventListener("DOMContentLoaded", function () {

    acceso (); // funcion que verifica si esta logeado, sino redirige a index

    getJSONData(url_carBuy).then(function (resultObj) {
        console.log(url_carBuy);
        if (resultObj.status === "ok") {
            carUser = resultObj.data;
            // console.log(carUser);
            showCarUser();



        };


        document.getElementById("numero").addEventListener("input", function () {

            let cantidad = document.getElementById("numero").value;
            let precio = carUser.articles[0].unitCost;
            let subTotal = cantidad * precio

            document.getElementById("subTotal").innerHTML = subTotal; // como estaba antes y uso el punto value
            localStorage.setItem("subTotalGen", subTotal); // guardo la info de 

            let sTGeneral = parseInt(localStorage.getItem("subTotalGen")) ;
            console.log(typeof(sTGeneral) )
            /* subTotalGeneral(); */

            let costo = `
            <div>${sTGeneral}</div>
             `
            document.getElementById("subTotalGeneral").innerHTML = costo;
            
            
            let envio1= document.getElementById("envio1");
            let envio2=document.getElementById("envio2");
            let envio3= document.getElementById("envio3");
            function costoEnvio(sTGeneral) {
                if (envio1.checked) {
                  return  sTGeneral * (0.15)
                } 
                if (envio2.checked) {
                return sTGeneral * (0.07)
                }
                if (envio3.checked) {
                  return  sTGeneral * (0.5)
                }
            };

            let costEnvio = `
            <div>${costoEnvio(sTGeneral)}</div>
            `
            document.getElementById("costoEnvio").innerHTML = costEnvio;
            
            function totales() {
                return sTGeneral + costoEnvio(sTGeneral) ;
            }

            let total=`
            <div>${totales()}</div>
            `

            document.getElementById("total").innerHTML = total

        });




    })



});


/// esto me funciona solo si hago click una vez, sino se bloquean todos los campos... ver eventos
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

document.getElementById("tarjetaCred").addEventListener("click", function () {

    if (checked1.checked) {
        numCuenta.disabled = true;

    }

});

document.getElementById("transBanco").addEventListener("click", function () {

    if (checked2.checked) {

        nTarjeta.disabled = true;
        codSeguridad.disabled = true;
        date.disabled = true;
    }




});


(function () {
    //'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (evento) {

                if (!form.checkValidity()) {
                    evento.preventDefault()
                    evento.stopPropagation()
                }
                if (!checked1.checked && !checked2.checked) {
                    evento.preventDefault()

                    document.getElementById("validarModal").innerHTML = "Falta elegir forma de pago"
                    document.getElementById("validarPago").innerHTML = "Falta elegir forma de pago"
                } if (checked1.checked) {
                    (nTarjeta.value && codSeguridad.value && date.value) == undefined;

                    document.getElementById("validarTarjeta").innerHTML = "Falta completar campos";
                    document.getElementById("validarModal").innerHTML = "Falta completar campos en forma de pago";
                    evento.preventDefault()

                }
                if (checked1.checked) {
                    (nTarjeta.value && codSeguridad.value && date.value) != undefined;

                    document.getElementById("validarTarjeta").innerHTML = "";
                    document.getElementById("validarModal").innerHTML = "";


                }
                if (checked2.checked) {
                    numCuenta.value = undefined;

                    document.getElementById("validarTrans").innerHTML = "Falta completar campo";
                    document.getElementById("validarModal").innerHTML = "Falta completar campos en forma de pago"
                    evento.preventDefault()

                }
                if (checked2.checked) {
                    numCuenta.value != undefined;

                    document.getElementById("validarTrans").innerHTML = "";
                    document.getElementById("validarModal").innerHTML = "";


                }
                if (form.checkValidity()){
                    alert("completo con exito la operacion")
                }


                form.classList.add('was-validated')
                
            }, false)
        })
})();








