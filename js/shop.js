function renderProductsCarrito() {
    const products = chargeProductsCarrito(); 
    let contenido = "";

    if (products.length == 0) {
        contenido =  `<div class="alert alert-danger text-center" role="alert">No products found in the shopping cart! </div>`
    } else {
        contenido += `<table class="table">
        <tr>
        <td class="text-end" colspan="6"><a href="#" class="btn btn-secondary btn-backg-color" title="Empty cart" onclick="clearCarrito()">Empty cart<img src="images/trash_1.png"  width="25"</a></td>
        </tr>`;

        products.forEach((product) => {
        contenido += `<tr>
            <td class="text-start"><img src="images/${product.imagen}" alt="${product.nombre}" width="45"></td>
            <td>${product.nombre}</td>
            <td>$${product.price}</td>
            <td><a href="#" class="btn btn-danger btn-backg-color" title="Delete Item" onclick="deleteItems(${product.id});">-</a>
            <b>${product.cantidad}</b><a href="#" class="btn btn-danger btn-backg-color" title="Add Item" onclick="addItems(${product.id});">+</a></td>
            <td><b>$${product.price * product.cantidad}</b></td>
            <tr>`;
            
        });

        contenido += `<tr>
        <td colspan="4"><b>Total:</b></td>
        <td><b>$${payment()}</b></td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td class="text-end" colspan="6"><a href="#" class="btn btn-secondary btn-backg-color" title="End purchase" onclick="endPurchase()">End purchase</a></td>
        </tr>
        <td class="text-end" colspan="6"><a href="./store.html" class="btn btn-primary btn-backg-color" title="Continue shopping">Back to Store</a></td>
        </table>`;
    }
    
    document.getElementById("products").innerHTML = contenido; 
    
}


renderProductsCarrito();
updateButtonCarrito();


