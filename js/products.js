const productos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(productos)
    .then(respuesta => respuesta.json())

    .then(datos => {


        for (let products of datos.products) {
            let lista =`
            <div class="list-group-item list-group-item-action">
                <div class="fila">
                    <div class="imagen">
                        <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class= "col-3">
                        <div class= "productos">
                            <h4>` + products.name + "-" + products.currency +  + products.cost + ` </h4>
                            <p> ` + products.description + `</p>

                        </div>
                        <small class="text-muted"> ` +products.soldCount + ` artículos</small>
                    </div>
                </div>

                </div>
                `


            document.getElementById("products").innerHTML += lista;
        }
    })

    .catch(error => alert("Se produjo un error:" + error));