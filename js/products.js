
const urlCatProd = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE; // concatene los valores - nueva url-




let data = "";
let lista= ""





document.addEventListener("DOMContentLoaded", function (e) { // aca accedo a los datos voy por buen camino
    document.getElementById("products").innerHTML += "";
    getJSONData(urlCatProd).then(function (resultObj) {
        if (resultObj.status === "ok") {
           data = resultObj;
            console.log(data);
            
            showProducts(data);
            

        }
    
})})

function showProducts(){
    for (let products of data.data.products) {
        let lista = `                                           
        <div class="list-group-item list-group-item-action"> 
            <div class="row">
                <div>
                <button class="button"> 
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class= "col">
                    <div class= "d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>` + products.name + "-" + products.currency + + products.cost + ` </h4>
                        <p> ` + products.description + `</p>
                        </div>
                    </div>
                    <small class="text-muted"> ` + products.soldCount + ` artículos</small>
                </div>
                </div>
            </div>

            </div>
            `
            document.getElementById("products").innerHTML += lista;
            
}
 // si pongo .catch(error => alert("Se produjo un error:" + error)) me da error en JS ??
}
