class Adopt {
    constructor(name, type, age, sex, hobbies, image) {
        this.name = name.toUpperCase();
        this.type = type;
        this.age = age;
        this.sex = sex;
        this.hobbies = hobbies;
        this.image = image;
        this.adopta = false;
    }
}

//Array Pets
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

document.getElementById("searchButton").onclick = function () {
    let searchValue = document.getElementById("searchInput").value;
    let result = pets.filter((value) => value.type.includes(searchValue));
    let resultHtml = "";

    console.log(result);
    for (let item of result) {
        console.log("Pet's Name: " + item.name + ", Type: " + item.type + ", Age: " + item.age + " , Sex: " + item.sex + ", Hobbies: " + item.hobbies + ".");
        resultHtml += `<div class="container">
                            <div class="card">
                            <img src="images/${item.image}" class="card-img-top" alt="${item.name}" width="10">
                                <div class="card-body">
                                    <h5 class="card-title"><b>${item.name}</b></h5>
                                    <p class="card-text">${item.hobbies}</p>
                                    <p class="card-text">${item.sex}</p>
                                    <p class="card-text">${item.age}</p>
                                    <a href="#" class="btn btn-danger btn-backg-color" title="button-adopt">Whatsapp</a>
                                </div>
                            </div>
                        </div>`;
    }


    document.getElementById("pets").innerHTML = '';
    document.getElementById("pets").innerHTML = resultHtml;
}


window.addEventListener('scroll', function() {
    let animateImg = this.document.getElementById('pets');
    let positionImg = animateImg.getBoundingClientRect().top;
    console.log(positionImg);
    let screenSize = window.innerHeight/4;

    if(positionImg < screenSize) {
        animateImg.style.animation = 'mover 0.5s ease-out'
    }
})
