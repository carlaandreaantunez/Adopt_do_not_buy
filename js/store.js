function renderProductos() {
    const productos = cargarProductosLS(); //me devuelve un array de productos
    let contenido = "";

    productos.forEach((producto) => {
        //+= -> para ir sumando cada contenido al html, agregamos tb el envento onclick que llame a la funcion -> agregar producto
        contenido += `<div class="col-md-3">
        <div class="card border border-0">
            <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text ">$${producto.precio}</p>
                <a href="#" class="btn btn-danger" onclick="agregarProducto(${producto.id})">Agregar (+)</a>
            </div>
        </div>
        </div>`;
        
        
    });

document.getElementById("productos").innerHTML = contenido; //llamamos al id del html y lo impactamos en el mismo

}

renderProductos();
actualizarBotonCarrito();