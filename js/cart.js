const url_carBuy = CART_INFO_URL + "25801" + EXT_TYPE;



function showCarUser() {

    let car = carUser.articles[0];


    let liCar = `
    <div class= "container">
        <h1 class="text-center">Carrito de compras</h1>

        <h2 class="especial">Artículos a comprar</h2>

        <div class= "row" id="table">
         
        <div class="col">

        </div>
    
        <div class="col">
         <p><strong>Nombre</strong></p>
        </div>
         <div class="col">
            <p><strong>Costo</strong></p>
        </div>
        
        <div class="col">
            <p><strong>Cantidad</strong></p>
        </div>
        <div class="col">
            <p><strong>Subtotal</strong></p>
        </div>
        
    

</div>
    <div class= "row" id="table2">
        
        <div class="col">
           <img src="${car.image}" alt="img-prod"  class="img-thumbnail">
         </div>
    
            <div class="col">
             <p>${car.name}<p>
            </div>
         <div class="col">
            <p>${car.currency}${car.unitCost}</p>
        </div>
        
        <div class="col">
        
        <input type="number" name="numero" id="numero"  min= "1" value="1" onchange ="setCantidad(this.value)">
            
        </div>
        <div class="col">
            <p>${car.currency}</p> <p id= "prueba">${car.unitCost}</p>
        </div>
        

        </div>
        
    </div>
    `
    console.log(typeof (this.value));
    //puse en el input value="${car.count}" para que me quede precargado el valor....

    document.getElementById("carrito").innerHTML += liCar;


};

function setCantidad(value) {
    localStorage.setItem("cantidad", value);
    window.location = "cart.html";

}



/* function showSubTotal (){
    let subT = `
    <div>
    <p>${miSubTotal()}</p>
    </div>
    `
    document.getElementById("total").innerHTML += subT
} */


/* function miSubTotal(value){ // la funcion la prueba en consola y funciona....
        
    let precio = carUser.articles[0].unitCost;
    
    
    console.log(precio);
    console.log(value)

    value * precio;
    console.log(value * precio);

    

} */



document.addEventListener("DOMContentLoaded", function () {
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



            document.getElementById("prueba").innerHTML = cantidad * precio;
        });
        


    })


})

