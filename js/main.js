//crear un array de productos (objetos)
const productos = [
    {id:1, nombre: "Stuffed Spiderman",
    descripcion:"peluche de nylon relleno", imagen:"peluche.jpg", precio: 2962},
    {id:2, nombre: "Teether Capitan",
    descripcion:"peluche de nylon relleno con mordillo de goma", imagen:"mordillo.jpg", precio: 2360},
    {id:3, nombre: "Teether Hulk",
    descripcion:"Mordillo de goma y tela", imagen:"mordillo_hulk.jpg", precio: 4073},
    {id:4, nombre: "Toy Chuckit",
    descripcion:"juguete de toalla", imagen:"juguete.jpg", precio: 2928},
    {id:5, nombre: "Tunnel",
    descripcion:"Túnel de Tela triple", imagen:"tunel.jpg", precio: 5217},
    {id:6, nombre: "Toy",
    descripcion:"Juguete Hipopotamo de latex", imagen:"hipopotamo.jpg", precio: 550},
    {id:7, nombre: "Sanitary kit", peso: 500, 
    descripcion:"Kit Sanitario: contiene pal y bebedero", imagen:"kit_sanitario_gato.jpg", precio: 922},
    {id:8, nombre: "Scraper",
    descripcion:"Rascador de madera", imagen:"rascador.jpg", precio: 5790}
];

   //lo guardamos en el localStorage -> porque lo vamos a usar para consultar
   function guardarProductosLS(productos) { //le enviamos por parametro un array
       localStorage.setItem("productos", JSON.stringify(productos)); //para guardar la localStorage
}

   //lo parseamos para que nos devuelva el objeto original 
function cargarProductosLS() {
       return JSON.parse(localStorage.getItem("productos")) || [];  //funciona como un if, si no exite me devuelve un array vacio eso hacemos con el operador or -> ||
}

   //lo guardamos en el carrito -> LocalStorage productos_carrito
   function guardarProductosCarrito(productos) { //le enviamos por parametro un array
    localStorage.setItem("productos_carrito", JSON.stringify(productos)); //para guardar la localStorage
}

//Para que lea la LocalStorage del carrito
function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("productos_carrito")) || [];  //funciona como un if, si no exite me devuelve un array vacio eso hacemos con el operador or -> ||
}


//Obtenemos el array de productos y buscar por id
function buscarProducto(id) {
    const productos =cargarProductosLS();
    return productos.find (item => item.id === id); //item = variable identacion
}

//Recibe por parametro el id del producto que vamos a agregar
function agregarProducto(id) {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id); //busco si existe o no (devuelve -1)
   //si esta el producto (> -1)
    if (pos > -1) {
        productos_carrito[pos].cantidad += 1;
    }else {
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


function actualizarBotonCarrito () {
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="./images/shop.png" alt="carrito" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProducto()}</span>
</button>`;

document.getElementById("boton_carrito").innerHTML = contenido;

}

function vaciarCarrito () {
    localStorage.removeItem("productos_carrito"); //para eliminar todo
    renderProductosCarrito(); 
    actualizarBotonCarrito();    
}

function totalProducto () {
    const productos_carrito = cargarProductosCarrito();
    //recorre el LocalStorage y suma la cantidad -> reduce
    return productos_carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0); // recibe 2 parametros ->  1° funcion (recibe dos parametros: acumulador y la variable iteracion), 2° valor inicial "0"
}

function totalAPagar () {
    const productos_carrito = cargarProductosCarrito();
    //recorre el LocalStorage y calculamos el toal p*q -> reduce
    return productos_carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0); // recibe 2 parametros ->  1° funcion (recibe dos parametros: acumulador y la variable iteracion), 2° valor inicial "0"
}


guardarProductosLS(productos);






