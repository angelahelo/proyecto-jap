const url_carBuy = CART_INFO_URL + "25801" + EXT_TYPE;

function showCarUser (){

    let car = carUser.articles[0];
    
    let liCar =`
    <div class= "container">
        <h1 class="text-center">Carrito de compras</h1>

        <h3>Artículos a comprar</h3>

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
            <p>${car.count}</p>
        </div>
        <div class="col">
            <p>funcion</p>
        </div>
        
    



</div>
        
    </div>
    `
    document.getElementById("carrito").innerHTML += liCar
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(url_carBuy).then(function(resultObj){
        console.log(url_carBuy);
        if(resultObj.status === "ok"){
            carUser = resultObj.data;
            console.log(carUser);
            showCarUser()

        }
    })
})

/* 

 <div style="overflow-x: auto;">
         <table>
            <tr>
            <th></th>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Cantidad</th>
            <th>subtotal</th>
            <th> </th>
            </tr>
            <tr>
            <td id="img" class="size"><img src="${car.image}" alt="img-prod"></td>
            <td>${car.name}</td>
            <td>${car.currency}${car.unitCost}</td>
            <td>${car.count}</td>
            <td>poner una funcion</td>
            <td></td>
             </tr>
         </table>
        </div>

*/