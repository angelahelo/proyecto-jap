
const urlCatProd = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE; // concatene los valores - nueva url-

const urlProdInfo = PRODUCT_INFO_URL + localStorage.getItem("setProdInfo") + EXT_TYPE; // nueva url para mostrar info prod



let lista = "";
let min = undefined;
let max = undefined; 






function showProducts(){
    document.getElementById("products").innerHTML = "";
    for (let products of lista.products) {

               
        products.cost= parseInt(products.cost);
        //console.log(parseInt(products.cost));
        if ((products.cost>= min && products.cost<= max) || (max == undefined && min == undefined)) {
        // RECORRER EN FORMA DE INDICE...
        let li = `                                           
        <div class="list-group-item list-group-item-action"> 
            <div class= ""container>
        <div class="row">
                <div>
                <button type="button" id="redProInfo"> 
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
            </div>
            `
            document.getElementById("products").innerHTML += li;

            
        } 

        let prodInfoId = + products.id
        localStorage.setItem("setProdInfo", prodInfoId);


            
}
 // si pongo .catch(error => alert("Se produjo un error:" + error)) me da error en JS ??
}

document.addEventListener("DOMContentLoaded", function (e) { // aca accedo a los datos voy por buen camino
   
    getJSONData(urlCatProd).then(function (resultObj) {
        if (resultObj.status === "ok") {
           lista = resultObj.data;
            console.log(lista);
            
            showProducts(lista);
            

        }
        document.getElementById("filter").addEventListener("click", function (){ 
            if (document.getElementById("filterMin").value !=""){
                min = parseInt (document.getElementById("filterMin").value);
        
            } else {
                min= undefined;
        
            } if (document.getElementById("filterMax").value !=""){
                max = parseInt(document.getElementById("filterMax").value);
            } else {
                max = undefined
            }
            showProducts(lista)
        
        })
        
        document.getElementById("asc").addEventListener("click", function(){ // hace la funcion me pasa lo mismo que antes no se me borra la lista anterior
            lista.products.sort(function (a,b){
                if(parseInt(a.cost) < parseInt(b.cost)){
                    return -1;
                }
                if(parseInt (a.cost)> parseInt(b.cost)){
                    return 1;
                }
                return 0;
        
            });
            showProducts(lista)
        })
        
        document.getElementById("desc").addEventListener("click", function(){
            lista.products.sort(function(a,b){
                if (parseInt(a.cost) > parseInt(b.cost)){
                    return -1;
                }
                if(parseInt (a.cost)< parseInt(b.cost)){
                    return 1;
                }
                return 0;
            
            });
        
            showProducts(lista)
        })
        
        document.getElementById("relCount").addEventListener("click", function(){ // no me funciona... ver
            lista.products.sort(function(a,b){
                if (parseInt(a.soldCount) > parseInt(b.soldCount)){
                    return -1;
                }
                if(parseInt (a.soldCount)< parseInt(b.soldCount)){
                    return 1;
                }
                return 0;
            
            });
        
            showProducts(lista)
        })

        document.getElementById("clearFilter").addEventListener("click", function(){
            min = undefined;
            max = undefined;
            showProducts(lista);
            document.getElementById("filterMin").value="";
            document.getElementById("filterMax").value="";

        })

        document.getElementById("redProInfo").addEventListener("click", function(){
            

        })

        document.getElementById("redProInfo").addEventListener("click", function (){
            window.location.href = "product-info.html"
        })
    
})})





// me hace el filtro pero agrega a la lista no me borra la lista anterior