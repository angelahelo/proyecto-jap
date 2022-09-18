const urlProdInfo = PRODUCT_INFO_URL + localStorage.getItem("prodID") + EXT_TYPE; // nueva url para mostrar info prod



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

        </div>
       
        

    `

    document.getElementById("pInfo").innerHTML += info;

    /// ver ejercicio alumnos con for of ... mas facil que for i ++




};



document.addEventListener("DOMContentLoaded", function (e) { // aca accedo a los datos voy por buen camino

    getJSONData(urlProdInfo).then(function (resultObj) {
        console.log(urlProdInfo);
        if (resultObj.status === "ok") {
            prodInfo = resultObj.data;
            console.log(prodInfo);

            showProductInfo(prodInfo);


        }
    })
})