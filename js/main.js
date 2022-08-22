//Array products
const productos = [
    {
        id: 1, nombre: "Stuffed Spiderman",
        descripcion: "peluche de nylon relleno", imagen: "peluche.jpg", price: 2962
    },
    {
        id: 2, nombre: "Teether Capitan",
        descripcion: "peluche de nylon relleno con mordillo de goma", imagen: "mordillo.jpg", price: 2360
    },
    {
        id: 3, nombre: "Teether Hulk",
        descripcion: "Mordillo de goma y tela", imagen: "mordillo_hulk.jpg", price: 4073
    },
    {
        id: 4, nombre: "Toy Chuckit",
        descripcion: "juguete de toalla", imagen: "juguete.jpg", price: 2928
    },
    {
        id: 5, nombre: "Tunnel",
        descripcion: "Túnel de Tela triple", imagen: "tunel.jpg", price: 5217
    },
    {
        id: 6, nombre: "Toy",
        descripcion: "Juguete Hipopotamo de latex", imagen: "hipopotamo.jpg", price: 550
    },
    {
        id: 7, nombre: "Sanitary kit", peso: 500,
        descripcion: "Kit Sanitario: contiene pal y bebedero", imagen: "kit_sanitario_gato.jpg", price: 922
    },
    {
        id: 8, nombre: "Scraper",
        descripcion: "Rascador de madera", imagen: "rascador.jpg", price: 5790
    }
];

//lo guardamos en el localStorage -> porque lo vamos a usar para consultar
function guardarProductosLS(productos) { //le enviamos por parametro un array
    localStorage.setItem("productos", JSON.stringify(productos)); //para guardar la localStorage
}

//lo parseamos para que nos devuelva el objeto original 
function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || []; 
}

//lo guardamos en el carrito -> LocalStorage productos_carrito
function guardarProductosCarrito(productos) { 
    localStorage.setItem("productos_carrito", JSON.stringify(productos)); 
}

//Para que lea la LocalStorage del carrito
function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("productos_carrito")) || []; 
}


//Obtenemos el array de productos y buscar por id
function buscarProducto(id) {
    const productos = cargarProductosLS();
    return productos.find(item => item.id === id); 
}

//Recibe por parametro el id del producto que vamos a agregar
function agregarProducto(id) {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id); //busco si existe o no (devuelve -1)
    //si esta el producto (> -1)
    if (pos > -1) {
        productos_carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id); //deberia devolverme el objeto
        producto.cantidad = 1;
        productos_carrito.push(producto); //push -> para incorporar el producto
    }

    guardarProductosCarrito(productos_carrito); //pisa nuestra localStorage
    actualizarBotonCarrito(); //para que se actualice automaticamente

}

function eliminarProducto(id) {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id); //busco
    productos_carrito[pos].cantidad -= 1; //elimino si esta en la posicion

    if (productos_carrito[pos].cantidad == 0) {
        productos_carrito.splice(pos, 1); //numero de la posicion y cuantos
    }

    guardarProductosCarrito(productos_carrito); //pisa nuestra localStorage
    renderProductosCarrito();
    actualizarBotonCarrito(); //para que se actualice automaticamente    
}

//Agregar item Shop
function agregarItems(id) {

    agregarProducto(id);
    renderProductosCarrito();
}

//Eliminar item Shop
function eliminarItems(id) {

    eliminarProducto(id);
    renderProductosCarrito();
}


function actualizarBotonCarrito() {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="./images/shop.png" alt="carrito" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProducto()}</span>
</button>`;

    document.getElementById("boton_carrito").innerHTML = contenido;

}

function vaciarCarrito() {
    localStorage.removeItem("productos_carrito"); 
    renderProductosCarrito();
    actualizarBotonCarrito();
}

function totalProducto() {
    const productos_carrito = cargarProductosCarrito();
    //recorre el LocalStorage y suma la cantidad -> reduce
    return productos_carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0); // recibe 2 parametros ->  1° funcion (recibe dos parametros: acumulador y la variable iteracion), 2° valor inicial "0"
}

function totalAPagar() {
    const productos_carrito = cargarProductosCarrito();
    //recorre el LocalStorage y calculamos el toal p*q -> reduce
    return productos_carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.price), 0); // recibe 2 parametros ->  1° funcion (recibe dos parametros: acumulador y la variable iteracion), 2° valor inicial "0"
}

//function endPurchase
function endPurchase() {
    localStorage.removeItem("productos_carrito");

    Swal.fire({
        position: 'top-center',
        imageUrl: 'images/logo-dog.png',
        imageWidth: 50,
        imageHeight: 50,
        imageAlt: 'dog',
        title: 'Thank you for your purchase!',
        text: "'We are redirecting you to the payment page!',",
        showConfirmButton: true,
        confirmButtonText: "Great :)",
        timer: 4000
    })

    renderProductosCarrito();
    actualizarBotonCarrito();
}



guardarProductosLS(productos);

