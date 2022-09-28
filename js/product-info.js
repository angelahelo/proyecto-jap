const urlProdInfo = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE; // nueva url para mostrar info prod

const urlProdComent = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE; // url muestro comentarios


function setProdInfo(id){
    localStorage.setItem("prodID",id);
    window.location = "product-info.html"
}

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
             
             <div class="row align-items-start">

             <div class="col">
             <div><img class="bd-placeholder-img card-img-top" src="${prodInfo.images[0]}"></div>
             </div>

             <div class="col">
             <div><img class="bd-placeholder-img card-img-top" src="${prodInfo.images[1]}"></div>
             </div>

             <div class="col">
             <div><img class="bd-placeholder-img card-img-top" src="${prodInfo.images[2]}"></div>
             </div>

             <div class="col">
             <div><img class="bd-placeholder-img card-img-top" src="${prodInfo.images[3]}"></div>

             <br></br>
             </div>

             
             
             

        </div>
       
        

    `

    document.getElementById("pInfo").innerHTML += info;

    //Agregue la informacion de productos relacionados con un for para que recorra..
    // ver como poner las fotos al lado... no me salio...
    
    // PUSE UN ONCLICK, FUNCION SETPRODINFO... 
    
    let pr = prodInfo.relatedProducts;
    

    for (let i = 0; i < pr.length; i++) {
        let lipr = `
        

            <div onclick="setProdInfo(${pr[i].id})" class = "row align-items-start">
            <div class = "col-3">
                <div class="card">
                
                <img src="${pr[i].image}" class="bd-placeholder-img card-img-top" alt="producto-relacionado">
               
                <div class="card-body">
                <h5 class="card-title">${pr[i].name}</h5>
                </div>
                </div>
                </div>
                </div>
           
       
        `
        document.getElementById("pInfo").innerHTML += lipr;

        console.log(pr[i].name);
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
        <p><strong>Comentarios</strong></p>
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
    })
})




function estrellasMarcadas(score) {
    let checkEstrella = `<span class="fa fa-star checked"></span>`;
    let notEstrella = `<span class="fa fa-star"></span>`;

    return checkEstrella.repeat(score) + (notEstrella.repeat(5 - score))

}

