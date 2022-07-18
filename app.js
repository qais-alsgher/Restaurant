`use strict`;

let allFood = [];

//constructor food
function Food(foodname, type, price, foodId) {
    this.foodId = foodId;
    this.foodName = foodname;
    this.type = type;
    this.price = price;
    allFood.push(this);
}


function countId() {
    return (Math.floor(1000 + Math.random() * 9000));
}

//submit event 
const form = document.getElementById("formId");

form.addEventListener('submit', handLeSubmit);

function handLeSubmit(event) {
    event.preventDefault();
    let foodName = event.target.foodName.value;
    let type = event.target.type.value;
    let price = event.target.price.value;
    let foodId = countId();
    // testE(foodName, type, price, foodId);
    let newFood = new Food(foodName, type, price, foodId);
    localSet()
}




//send data to local storage 
function localSet() {
    let arrFood = JSON.stringify(allFood);
    localStorage.setItem("food", arrFood);
}

// let oldFood = JSON.parse(localStorage.getItem("food"));
function getItem() {
    let oldFood = JSON.parse(localStorage.getItem("food"));
    if (oldFood) {
        for (let i = 0; i < oldFood.length; i++) {
            new Food(oldFood[i].foodName, oldFood[i].type, oldFood[i].price, oldFood[i].foodId);
        }
    }
}
getItem();





