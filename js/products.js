
const urlCatProd = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE; // concatene los valores - nueva url-


/*let getJSONDataA = function(urlCatProd){  // pase la url por getJSONDataA, quedo ok // se que va document document.addEventListener("DOMContentLoaded", function(e){
    let result = {};                //getJSONData(CATEGORIES_URL).then(function(resultObj){
    showSpinner();                  // if (resultObj.status === "ok") quise ponerlo y rompi todo
    return fetch(urlCatProd)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}*/

/*document.addEventListener("DOMContentLoaded", function(){           
  getJSONData(urlCatProd).then(function(resultObj){
      if(resultObj.status == "ok"){
          productsArray = resultObj.data
      }
  })
})*/


fetch(urlCatProd)
    .then(respuesta => respuesta.json())

    .then(datos => {


        for (let products of datos.products) {
            let lista = `
            <div class="list-group-item list-group-item-action">
                <div class="row">
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
                `


            document.getElementById("products").innerHTML += lista;
        }
    })

    .catch(error => alert("Se produjo un error:" + error));


    const ORDER_ASC_BY_COST = "$↑";
    const ORDER_DESC_BY_COST = "$↓";
    const ORDER_BY_PROD_REL = "Rel";
    let currentProductsArray = [];
    let currentSortCriteria = undefined;
    let minCount = undefined;
    let maxCount = undefined;
    
    function sortProducts(criteria, array){
        let result = [];
        if (criteria === ORDER_ASC_BY_COST)
        {
            result = array.sort(function(a, b) {
                if ( a.name < b.name ){ return -1; }
                if ( a.name > b.name ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_DESC_BY_COST){
            result = array.sort(function(a, b) {
                if ( a.name > b.name ){ return -1; }
                if ( a.name < b.name ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_BY_PROD_REL){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }
    
     
    
    
    function showProductsList(){
    
        let htmlContentToAppend = "";
        for(let i = 0; i < currentProductsArray.length; i++){
            let products = currentProductsArray[i];
    
            if (((minCount == undefined) || (minCount != undefined && parseInt(products.soldCount) >= minCount)) &&
                ((maxCount == undefined) || (maxCount != undefined && parseInt(category.soldCount) <= maxCount))){
    
                    let lista = `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
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
                        `
            }
    
            document.getElementById("products").innerHTML += lista;
        }
    }
    
    function sortAndShowProducts(sortCriteria, productsArray){
        currentSortCriteria = sortCriteria;
    
        if(productsArray != undefined){
            currentProductsArray = productsArray;
        }
    
        currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    
        
        showProductsList();
    }
    
    
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(urlCatProd).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentProductsArray = resultObj.data
                showProductsList()
                
            }
        });
    
        document.getElementById("asc").addEventListener("click", function(){
            sortAndShowProducts(ORDER_ASC_BY_COST);
        });
    
        document.getElementById("desc").addEventListener("click", function(){
            sortAndShowProducts(ORDER_DESC_BY_COST);
        });
    
        document.getElementById("count").addEventListener("click", function(){
            sortAndShowProducts(ORDER_BY_PROD_REL);
        });
    
        document.getElementById("clearFilter").addEventListener("click", function(){
            document.getElementById("filterMin").value = "";
            document.getElementById("filterMax").value = "";
    
            minCount = undefined;
            maxCount = undefined;
    
            showProductsList();
        });
    
        document.getElementById("count").addEventListener("click", function(){
            minCount = document.getElementById("filterMin").value;
            maxCount = document.getElementById("filterMax").value;
    
            if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
                minCount = parseInt(minCount);
            }
            else{
                minCount = undefined;
            }
    
            if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
                maxCount = parseInt(maxCount);
            }
            else{
                maxCount = undefined;
            }
    
            showProductsList();
        });
    });