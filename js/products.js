
const urlCatProd = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE; // concatene los valores - nueva url-





let lista = "";
let min = undefined;
let max = undefined; 



function setProdInfo(id){
    localStorage.setItem("prodID",id);
    window.location = "product-info.html"
}


function showProducts(){

    document.getElementById("products").innerHTML = "";

    let p = lista.products;

    for (let i= 0; i< p.length; i ++) {

        // RECORRER EN FORMA DE INDICE... me parecio mejor opcion
       
        p.cost= parseInt(p.cost);

        if ((p.cost>= min && p.cost<= max) || (max == undefined && min == undefined)) {
        
            //puse un onclick llamando a la funcion setProdInfo(id =${p[i].id} -> tome como referencia category, 
            
        let li = `                                           
        <div onclick="setProdInfo(${p[i].id})" class="list-group-item list-group-item-action cursor-active">
        <div class="list-group-item list-group-item-action"> 
            <div class= "container">
        <div class="row">
                <div>
                
                <div class="col-3">
                    <img src= ${p[i].image} alt="product image" class="img-thumbnail">
                </div>
                <div class= "col"> 
                    <div class= "d-flex w-100 justify-content-between">
                        <div class="mb-1"> 
                        <h4> ${p[i].name} "-" ${p[i].currency} ${p[i].cost} </h4>
                        <p> ${p[i].description} </p> 
                        </div>
                    </div> 
                    <small class="text-muted"> ${p[i].soldCount} artículos</small>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            `
            document.getElementById("products").innerHTML += li;

            
        } ;

              
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

       
      
})})





