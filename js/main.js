//Array products
const products = [
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


function saveProductsLS(products) { 
    localStorage.setItem("products", JSON.stringify(products)); 
}


function chargeProductsLS() {
    return JSON.parse(localStorage.getItem("products")) || []; 
}

function saveProductsCarrito(products) { 
    localStorage.setItem("products_carrito", JSON.stringify(products)); 
}


function chargeProductsCarrito() {
    return JSON.parse(localStorage.getItem("products_carrito")) || []; 
}


function searchProduct(id) {
    const products = chargeProductsLS();
    return products.find(item => item.id === id); 
}


function addProduct(id) {
    const products_carrito = chargeProductsCarrito();
    let pos = products_carrito.findIndex(item => item.id === id); 
    if (pos > -1) {
        products_carrito[pos].cantidad += 1;
    } else {
        const product = searchProduct(id); 
        product.cantidad = 1;
        products_carrito.push(product); 
    }

    saveProductsCarrito(products_carrito);
    updateButtonCarrito(); 

}

function deleteProduct(id) {
    const products_carrito = chargeProductsCarrito();
    let pos = products_carrito.findIndex(item => item.id === id); 
    products_carrito[pos].cantidad -= 1; 

    if (products_carrito[pos].cantidad == 0) {
        products_carrito.splice(pos, 1); 
    }

    saveProductsCarrito(products_carrito); 
    renderProductsCarrito();
    updateButtonCarrito(); 
}

function addItems(id) {
    addProduct(id);
    renderProductsCarrito();
}

function deleteItems(id) {
    deleteProduct(id);
    renderProductsCarrito();
}

function updateButtonCarrito() {
    let contenido = `<button type="button" class="btn-light position-relative">
    <img src="./images/shop-removebg-preview.png" alt="carrito" width="50">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProduct()}</span>
</button>`;

    document.getElementById("button_carrito").innerHTML = contenido;

}

function clearCarrito() {
    localStorage.removeItem("products_carrito"); 
    renderProductsCarrito();
    updateButtonCarrito();
}


function totalProduct() {
    const products_carrito = chargeProductsCarrito();
    return products_carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0); 
}

function payment() {
    const products_carrito = chargeProductsCarrito();
    return products_carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.price), 0); 
}


function endPurchase() {
    localStorage.removeItem("products_carrito");

    Swal.fire({
        position: 'top-center',
        imageUrl: 'images/logo-dog.png',
        imageWidth: 60,
        imageHeight: 60,
        imageAlt: 'dog',
        title: 'Thank you for your purchase!',
        text: "'We are redirecting you to the payment page!',",
        showConfirmButton: true,
        confirmButtonText: "Great :)",
        timer: 4000
    })

    renderProductsCarrito();
    updateButtonCarrito();
}



saveProductsLS(products);

//function addCart
function addCart() {
    
    Swal.fire({
        position: 'top-center',
        imageUrl: 'images/shop-removebg-preview.png',
        imageWidth: 80,
        imageHeight: 80,
        imageAlt: 'cart',
        title: 'Add item!',
        text: "'Thanks!'",
        showConfirmButton: true,
        confirmButtonText: "Great :)",
        timer: 4000
    })

}
