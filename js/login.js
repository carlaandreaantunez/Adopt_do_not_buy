//formulario
let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let departamento = document.getElementById("departamento");
let direccion = document.getElementById("direccion");

//llama a la funcion obtener localidades -> me desplega una lista segun la opcion elegida "array"
departamento.addEventListener("change", obtenerLocalidades);

function obtenerLocalidades() {
    let departamento_seleccionado = document.getElementById("departamento").value;
    let localidades = "";

    if (departamento_seleccionado == "Mendoza") {
        localidades = ["1° seccion", "2° seccion", "3° seccion", "4° seccion" , "5° seccion" , "6° seccion"];
    } else if (departamento_seleccionado == "Las Heras") {
        localidades = ["Ciudad de Las Heras", "Capdeville" , "El Resguardo", "El Pastal", "El Algarrobal", "La Cieneguita", "Panquehua", "El Challao",
        "El Zapallar", "El Plumerillo", "El Borbollón", "Uspallata-Alta Montaña"];
    } else if (departamento_seleccionado == "Maipu") {
        localidades = ["Barrancas" , "Barrio Jesús de Nazaret", "Coquimbito" ,"Cruz de Piedra" , "El Pedregal", "Fray Luis Beltrán", "General Gutiérrez",
        "Luzuriaga", "Maipú", "Rodeo del Medio" , "Russell", "San Roque" , "Villa Teresa"];
    } else if (departamento_seleccionado == "Guaymallen") {
        localidades = ["Bermejo" ,"Buena Nueva", "Capilla del Rosario", "Colonia Segovia", "Dorrego", "El Sauce", "General Belgrano",
        "Guaymallén", "Jesús Nazareno","La Primavera" ,"Las Cañas" ,"Los Corralitos" ,"Nueva Ciudad" , "Pedro Molina", "Puente de Hierro",
        "Rodeo de la Cruz ", "San Francisco del Monte", "San José" , "Villa Nueva"];
    } else if (departamento_seleccionado == "Lujan de Cuyo") {
        localidades = ["Agrelo" , "Cacheuta", "Carrodilla", "Chacras de Coria", "El Carrizal", "Industrial" , "La Puntilla", 
        "Las Compuertas" , "Luján de Cuyo", "Mayor Drummond", "Perdriel", "Potrerillos", "Ugarteche", "Vistalba", "Vertientes del Pedemonte"];
    } else if (departamento_seleccionado == "Zana Este") {
        localidades = ["Santa Rosa" , "La Paz" , "San Martín", "Junín", "Rivadavia"];
    } else if (departamento_seleccionado == "Zona Norte") {
        localidades = ["Lavalle"];
    } else if (departamento_seleccionado == "Zona Centro") {
        localidades = ["Godoy Cruz"];
    } else if (departamento_seleccionado == "Zona Sur") {
        localidades = ["San Rafael", "Malargüe" , "General Alvear"];
    }

    let contenido = "";

    let ciudades = document.getElementById("ciudades");
    ciudades.innerHTML = ""; 

    for (let localidad of localidades) {
        let opcion = document.createElement("option"); 
        opcion.value = localidad;
        opcion.innerHTML = localidad.toUpperCase(); 
        ciudades.appendChild(opcion); 
    }

    document.getElementById("resultado").innerHTML = contenido;
} 

//CAMBIADO POR LO DE ABAJO (elimimar!!)
/*// Eventos del Teclado -> eventoKeyUp & KeyDown
nombre.addEventListener("keyup", controlNombre);
telefono.addEventListener("keyup", controlTelefono);
email.addEventListener("keydown", controlEmail);
departamento.addEventListener("keydown", eventoKeyDown);
direccion.addEventListener("keydown", controlDireccion);

function controlNombre() {
    console.log("Evento Key Up! (Desde la función)");

    if (nombre.value.length < 3) {
        let contenido = "<p class='text-white bg-primary p-3'>Ingrese un Nombre con mas de 3 caracteres</p>";
        document.getElementById("resultado").innerHTML = contenido;
    } else {
        document.getElementById("resultado").innerHTML = "";
    } 
}

function controlTelefono() {
    console.log("Control telefono");

    if (telefono.value.length < 6) {
        let contenido = "<p class='text-white bg-primary p-3'>Ingrese un telefono valido - celular o telefono fijo</p>";
        document.getElementById("resultado").innerHTML = contenido;
    } else {
        document.getElementById("resultado").innerHTML = "";
    } 
}

function controlEmail() {
    console.log("Control Email");

    if (email.value.length < 5) {
        let contenido = "<p class='text-white bg-primary p-3'>Complete con un mail correcto. ejemplo: carlaazasto@gmail.com </p>";
        document.getElementById("resultado").innerHTML = contenido;
    } else {
        document.getElementById("resultado").innerHTML = "";
    } 
}

function eventoKeyDown() {
    console.log("Seleccion realizada");
}

function controlDireccion() {
    console.log("Control Direccion)");

    if (direccion.value.length < 5) {
        let contenido = "<p class='text-white bg-primary p-3'>Complete con calle y numero, barrio si corresponde </p>";
        document.getElementById("resultado").innerHTML = contenido;
    } else {
        document.getElementById("resultado").innerHTML = "";
    } 
}*/
//Defino el evento Enviar
/*let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuestaClick);


function respuestaClick() {
    console.log("Enviado");
}*/


//Cambio el evento Enviar de arriba por sweet -> me parece que muestra mejor que el formulario ha sido enviado y sus errores antes de enviarlo.
function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    if (nombre.trim() == "") {
        displayError("Name");
        return false;
    }

    if (email.trim() == "") {
        displayError("Email");
        return false;
    }

    if (telefono.trim() == "") {
        displayError("Telephone");
        return false;
    }

    if (direccion.trim() == "") {
        displayError("Adress");
        return false;
    }
    

    Swal.fire({
        title: 'Are the data entered correctly?',
        text: "'Thank you for being part of this!!',",
        imageUrl: 'images/logo-dog.png',
        imageWidth: 50,
        imageHeight: 50,
        imageAlt: 'dog',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            storeData(nombre, email, telefono, direccion);
            Swal.fire(
                'Great!',
                'Form submitted'
            )
        }
    })
}

function displayError(campo) {
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in the: ' + campo
    })
}

function storeData(nombre, email, telefono, direccion) {
    localStorage.setItem("datosFormulario", JSON.stringify({ nombre: nombre, email: email, telefono: telefono, direccion:direccion }));
}

document.getElementById("boton_enviar").addEventListener("click", validateForm);


