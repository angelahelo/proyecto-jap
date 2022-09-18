const urlProdInfo = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE; // nueva url para mostrar info prod

const urlProdComent = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + EXT_TYPE; // url muestro comentarios


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
             </div>

             <br></br>
             <p><strong>Comentarios</strong></p>

        </div>
       
        

    `

    document.getElementById("pInfo").innerHTML += info;

    /// ver ejercicio alumnos con for of ... mas facil que for i ++




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

function showProductComent(){

   

    for (let i = 0; i < pc.length; i++) {
        let li = `
        <div class= "row">
        
        <div>
        <p><strong>${pc[i].user}- </strong> ${pc[i].dateTime} - ${pc[i].score}</p>
        <p>${pc[i].description}</p>
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
})})
