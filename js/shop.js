function renderProductosCarrito() {
    const productos = cargarProductosCarrito(); //me devuelve un array de productos
    let contenido = "";

    if (productos.length == 0) {
        contenido =  `<div class="alert alert-danger text-center" role="alert">No se encontraron productos carritos cargados en el carrito! </div>`
    } else {
        contenido += `<table class="table">
        <tr>
        <td class="text-end" colspan="6"><a href="#" class="btn btn-secondary" title="Vaciar Carrito" onclick="vaciarCarrito()">Vaciar carrito  <img src="images/trash_1.jpg" width="24"</a></td>
        </tr>`;

        productos.forEach((producto) => {
        contenido += `<tr>
            <td class="text-start"><img src="images/${producto.imagen}" alt="${producto.nombre}" width="40"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><a href="#" class="btn btn-danger rounded-circle" title="Eliminar Item" onclick="eliminarItems(${producto.id});">-</a>
            <b>${producto.cantidad}</b><a href="#" class="btn btn-danger rounded-circle" title="Agregar Item" onclick="agregarItems(${producto.id});">+</a></td>
            <td><b>$${producto.precio * producto.cantidad}</b></td>
            <tr>`;
            
        });

        contenido += `<tr>
        <td colspan="4"><b>Total a pagar:</b></td>
        <td><b>$${totalAPagar()}</b></td>
        <td>&nbsp;</td>
        </tr>
        <tr>
        <td class="text-end" colspan="6"><a href="#" class="btn btn-secondary" title="Finalizar Compra">Finalizar compra</a></td>
        </tr>
        </table>`;
    }
    
    document.getElementById("productos").innerHTML = contenido; //llamamos al id del html y lo impactamos en el mismo
    
}


renderProductosCarrito();
actualizarBotonCarrito();