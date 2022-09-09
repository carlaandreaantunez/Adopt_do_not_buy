//Form
let nameLogin = document.getElementById("nameLogin");
let telephoneLogin = document.getElementById("telephoneLogin");
let email = document.getElementById("email");
let depart = document.getElementById("depart");
let address = document.getElementById("address");

depart.addEventListener("change", obtainLocations);

function obtainLocations() {
    let depart_selected = document.getElementById("depart").value;
    let locations = "";

    if (depart_selected == "Mendoza") {
        locations = ["1° seccion", "2° seccion", "3° seccion", "4° seccion" , "5° seccion" , "6° seccion"];
    } else if (depart_selected == "Las Heras") {
        locations = ["Ciudad de Las Heras", "Capdeville" , "El Resguardo", "El Pastal", "El Algarrobal", "La Cieneguita", "Panquehua", "El Challao",
        "El Zapallar", "El Plumerillo", "El Borbollón", "Uspallata-Alta Montaña"];
    } else if (depart_selected == "Maipu") {
        locations = ["Barrancas" , "Barrio Jesús de Nazaret", "Coquimbito" ,"Cruz de Piedra" , "El Pedregal", "Fray Luis Beltrán", "General Gutiérrez",
        "Luzuriaga", "Maipú", "Rodeo del Medio" , "Russell", "San Roque" , "Villa Teresa"];
    } else if (depart_selected == "Guaymallen") {
        locations = ["Bermejo" ,"Buena Nueva", "Capilla del Rosario", "Colonia Segovia", "Dorrego", "El Sauce", "General Belgrano",
        "Guaymallén", "Jesús Nazareno","La Primavera" ,"Las Cañas" ,"Los Corralitos" ,"Nueva Ciudad" , "Pedro Molina", "Puente de Hierro",
        "Rodeo de la Cruz ", "San Francisco del Monte", "San José" , "Villa Nueva"];
    } else if (depart_selected == "Lujan de Cuyo") {
        locations = ["Agrelo" , "Cacheuta", "Carrodilla", "Chacras de Coria", "El Carrizal", "Industrial" , "La Puntilla", 
        "Las Compuertas" , "Luján de Cuyo", "Mayor Drummond", "Perdriel", "Potrerillos", "Ugarteche", "Vistalba", "Vertientes del Pedemonte"];
    } else if (depart_selected == "Zana Este") {
        locations = ["Santa Rosa" , "La Paz" , "San Martín", "Junín", "Rivadavia"];
    } else if (depart_selected == "Zona Norte") {
        locations = ["Lavalle"];
    } else if (depart_selected == "Zona Centro") {
        locations = ["Godoy Cruz"];
    } else if (depart_selected == "Zona Sur") {
        locations = ["San Rafael", "Malargüe" , "General Alvear"];
    }

    let html_content = "";

    let cities = document.getElementById("cities");
    cities.innerHTML = ""; 

    for (let locality of locations) {
        let option = document.createElement("option"); 
        option.value = locality;
        option.innerHTML = locality.toUpperCase(); 
        cities.appendChild(option); 
    }

    document.getElementById("result").innerHTML = html_content;
} 

function validateForm() {
    let nameLogin = document.getElementById("nameLogin").value;
    let email = document.getElementById("email").value;
    let telephoneLogin = document.getElementById("telephoneLogin").value;
    let address = document.getElementById("address").value;

    if (nameLogin.trim() == "") {
        displayError("Name");
        return false;
    }

    if (email.trim() == "") {
        displayError("Email");
        return false;
    }

    if (telephoneLogin.trim() == "") {
        displayError("Telephone");
        return false;
    }

    if (address.trim() == "") {
        displayError("Address");
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
            storeData(nameLogin, email, telephoneLogin, address);
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

function storeData(nameLogin, email, telephoneLogin, address) {
    localStorage.setItem("datosFormulario", JSON.stringify({ nameLogin: nameLogin, email: email, telephoneLogin: telephoneLogin, address:address }));
}

document.getElementById("button_enviar").addEventListener("click", validateForm);


