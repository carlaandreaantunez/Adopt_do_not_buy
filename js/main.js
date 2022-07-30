//Mostramos los animalitos que tenemos para adoptar y sus caracteristicas
class Adopt {
    constructor(name, type, age, sex, hobbies, image) {
        this.name = name.toUpperCase();
        this.type = type;
        this.age = age;
        this.sex = sex;
        this.hobbies = hobbies;
        this.image = image;
        this.adopt = false;
    }
}

let pets = [];
pets.push(new Adopt("Rafa", "rabbit", "5 months", "masculine", "Loves carrots", "rabbit_2.jpg"));
pets.push(new Adopt("Chicho", "rat", "1 year", "masculine", "Love your spinning wheel", "rat_1.jpg"));
pets.push(new Adopt("Electra", "cat", "7 months", "female", "Fanatic of wool balls", "cat_1.jpg"));
pets.push(new Adopt("Rupper", "dog", "4 months", "masculine", "Loves to make friends", "dog_2.jpg"));
pets.push(new Adopt("Little Girl", "dog", "5 months", "female", "Croquette lover", "dog_1.jpg"));
pets.push(new Adopt("Pistacho", "hedgehog", "1 year", "masculine", "Enjoys popping balloons", "hedgehog_1.jpg"));
pets.push(new Adopt("Coca", "cat", "2 years", "female", "Likes his toy mouse", "cat_3.jpg"));
pets.push(new Adopt("Sweet", "rabbit", "6 months", "female", "Loves to run", "rabbit_1.jpg"));
pets.push(new Adopt("Pelusa", "cat", "3 year", "masculine", "Likes to sleep a lot", "cat_4.jpg"));
pets.push(new Adopt("Lagerta", "dog", "4 months", "female", "Likes water puddles", "dog_4.jpg"));
pets.push(new Adopt("Panchito", "cat", "1 year", "masculine", "Eats a lot", "cat_2.jpg"));
pets.push(new Adopt("Synar", "dog", "3 months", "masculine", "Play the rope game", "dog_3.jpg"));
pets.push(new Adopt("Gold", "cat", "3 years", "masculine", "Loves fish", "cat_5.jpg"));
pets.push(new Adopt("Chule", "hedgehog", "1 year", "female", "Likes to make a bun", "hedgehog_2.jpg"));
console.log(pets);
let information = "";

for (let adopt of pets) {
    console.log("Pet's Name: " + adopt.name + ", Type: " + adopt.type + ", Age: " + adopt.age + " , Sex: " + adopt.sex + ", Hobbies: " + adopt.hobbies + ".");
    information += `<div>
                        <p class="text-name"><b>${adopt.name}</b><br>
                        <img src="images/${adopt.image}" alt="${adopt.name}" width="200"><br>
                        ${adopt.hobbies}<br>
                        ${adopt.sex}<br>
                        <b>${adopt.age}</b></p><br>
                    </div>`;
                    }

console.log(information);
document.getElementById("pets").innerHTML = information;

//Find Method
let selected_type = prompt("Do you want dog, cat, hedgehog, rat or rabbit?"); 
let result_type = pets.find((value) => value.type === selected_type);
console.log(result_type);

alert("Looking for female or masculine?, please go to SEARCH and enter the words -> female or masculine. Thanks a lot"); //ex:female

//Filter Method with Search
document.getElementById("searchButton").onclick = function () {
    let searchValue = document.getElementById("searchInput").value;
    let result_sex = pets.filter((value) => value.sex.includes(searchValue)); //FEMALE INCLUIA MALE: INCLUDES NO FUNCIONABA -> TUVE QUE PONER "MASCULINE"
    let resultHtml = "";

    console.log(result_sex); //mascota que cumple con la condicion por consola
    for (let item of result_sex) {
        console.log("Pet's Name: " + item.name + ", Type: " + item.type + ", Age: " + item.age + " , Sex: " + item.sex + ", Hobbies: " + item.hobbies + ".");
        resultHtml += `<div class="container">
                            <div class="card">
                            <img src="images/${item.image}" class="card-img-top" alt="${item.name}" width="10">
                                <div class="card-body">
                                    <h5 class="card-title"><b>${item.name}</b></h5>
                                    <p class="card-text">${item.hobbies}</p>
                                    <p class="card-text">${item.sex}</p>
                                    <p class="card-text">${item.age}</p>
                                </div>
                            </div>
                        </div>`;
    }


    document.getElementById("pets").innerHTML = ''; //PORQUE QUIERO QUE ME MUESTRE LOS QUE CUMPLEN CON LA CONDICION
    document.getElementById("pets").innerHTML = resultHtml;
}



