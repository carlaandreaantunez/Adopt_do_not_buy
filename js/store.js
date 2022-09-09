function renderProducts() {
    const products = chargeProductsLS(); 
    let contenido = "";

    products.forEach((product) => {
        contenido += `<div class="col-md-3">
        <div class="card border border-0">
            <img src="images/${product.imagen}" class="card-img-top" alt="${product.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text ">$${product.price}</p>
                <a href="#" class="btn btn-danger btn-backg-color" onclick="addProduct(${product.id});addCart()">Add (+)</a>
            </div>
        </div>
        </div>`;
        
        
    });

document.getElementById("products").innerHTML = contenido; 

}


renderProducts();
updateButtonCarrito();






