const urlProdInfo = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE; // nueva url para mostrar info prod

const urlProdComent = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE; // url muestro comentarios




// carousel si modificaba el tamaño de las imagenes no quedaba el estilo de carousel...

function showProductInfo() {

    let info = `

        <div class= "container"> 

             <div>
                <h1>${prodInfo.name}</h1>
                 <p><strong>Precio</strong></p>
                 <p>${prodInfo.currency} ${prodInfo.cost}</p>
                 <p><strong>Descripción</strong></p>
                 <p>${prodInfo.description}</p>
                 <p><strong>Categoría</strong></p>
                 <p>${prodInfo.category}</p>
                 <p><strong>Cantidad de productos vendidos</strong></p>
                 <p>${prodInfo.soldCount}</p>
                 <p><strong>Imágenes ilustrativas</strong></p>
             </div>

             <div id="carouselProdInfo" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselProdInfo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselProdInfo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselProdInfo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselProdInfo" data-bs-slide-to="3" aria-label="Slide 4"></button>
             </div>
            
             <div class="carousel-inner">

                    <div class="carousel-item active">
                    <img src="${prodInfo.images[0]}" class="d-block w-100" alt="img0">
                    </div>
            
                    <div class="carousel-item">
                    <img src="${prodInfo.images[1]}" class="d-block w-100" alt="img1">
                     </div>
                
                    <div class="carousel-item">
                    <img src="${prodInfo.images[2]}" class="d-block w-100" alt="img2">
                     </div>
                     <div class="carousel-item">
                    <img src="${prodInfo.images[3]}" class="d-block w-100" alt="img3">
                     </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselProdInfo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselProdInfo" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br>
            <p><strong>Productos relacionados</strong></p>
            </div>

    `

    document.getElementById("pInfo").innerHTML += info;

    //Agregue la informacion de productos relacionados con un for para que recorra..
    // ver como poner las fotos al lado... no me salio...

    //PARA USAR LA FUNCION setProdInfo que estaba en products, la pase al init.js 
    //asi la puedo usar para product-info y products. sin repetir codigo
    // PUSE UN ONCLICK, FUNCION SETPRODINFO...  class agregue cursor-active... para que me salga el cursor.. */

    let pr = prodInfo.relatedProducts;


    for (let i = 0; i < pr.length; i++) {
        let lipr = `

        
            
                <div onclick="setProdInfo(${pr[i].id})" class="card cursor-active" style="width: 18rem;">
                <img src="${pr[i].image}" class="card-img-top" alt="prod-rel">
                <div class="card-body">
                <h5 class="card-title">${pr[i].name}</h5>
                </div>
              </div>

            
       
        `
        document.getElementById("pInfo").innerHTML += lipr;


    }



};





document.addEventListener("DOMContentLoaded", function (e) { // aca accedo a los datos voy por buen camino

    getJSONData(urlProdInfo).then(function (resultObj) {

        if (resultObj.status === "ok") {
            prodInfo = resultObj.data;


            showProductInfo(prodInfo);



        }
    });


});
let pc = "";

function showProductComent() {

    for (let i = 0; i < pc.length; i++) {

        let score = parseInt(pc[i].score);

        let li = `
        <div class= "container"
        <div class= "row align-items-start">
        
        <div>
        
        <p><strong>${pc[i].user}- </strong> ${pc[i].dateTime} - ${estrellasMarcadas(score)}</p>
        <p>${pc[i].description}</p>
        </div>

        </div>
        </div>
        `
        document.getElementById("pComent").innerHTML += li

    }


};




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(urlProdComent).then(function (resultData) {
        //console.log(urlProdComent);
        if (resultData.status === "ok") {
            pc = resultData.data;


            showProductComent();



        }
    });


})




function estrellasMarcadas(score) {
    let checkEstrella = `<span class="fa fa-star checked"></span>`;
    let notEstrella = `<span class="fa fa-star"></span>`;

    return checkEstrella.repeat(score) + (notEstrella.repeat(5 - score))

}


