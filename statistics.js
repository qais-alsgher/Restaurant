let foodLest = [];


//constructor food
function Items(foodname, type, price, foodId) {
    this.foodId = foodId;
    this.foodName = foodname;
    this.type = type;
    this.price = price;
    foodLest.push(this);
}


//prent head table 

let foodMain = document.getElementById("tableF");
let tF = document.createElement("table");
foodMain.appendChild(tF);
let tRow = document.createElement("tr");
tF.appendChild(tRow);
let tID = document.createElement("th");
tRow.appendChild(tID);
tID.textContent = "ID";
let tName = document.createElement("th");
tRow.appendChild(tName);
tName.textContent = "Name";
let tType = document.createElement("th");
tRow.appendChild(tType);
tType.textContent = "Type";
let tPrice = document.createElement("th");
tRow.appendChild(tPrice);
tPrice.textContent = "Price";



//print data food
Items.prototype.render = function () {
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let tID = document.createElement("td");
    tRow.appendChild(tID);
    tID.textContent = this.foodId;
    let tName = document.createElement("td");
    tRow.appendChild(tName);
    tName.textContent = this.foodName;
    let tType = document.createElement("td");
    tRow.appendChild(tType);
    tType.textContent = this.type;
    let tPrice = document.createElement("td");
    tRow.appendChild(tPrice);
    tPrice.textContent = `${this.price} JD`;
};


function enptyItems(){
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let tenpty = document.createElement("td");
    tRow.appendChild(tenpty);
    tenpty.textContent = "The Table is Enpty";
    tenpty.colSpan="4";
    tenpty.style.textAlign="center";
}


//creat food oop
function getItem() {
    let getData = localStorage.getItem("food");
    let arrFood = JSON.parse(getData);
    if(arrFood===null){
        enptyItems();
    }else 
    if(arrFood) {
        for (let i = 0; i < arrFood.length; i++) {
            new Items(
                arrFood[i].foodName,
                arrFood[i].type,
                arrFood[i].price,
                arrFood[i].foodId
            );
        }
    }

    for (let i = 0; i < foodLest.length; i++) {
        foodLest[i].render();
    }
}
getItem();



let arrNameFood=[];
let arrPrice=[];
for(let i=0;i<foodLest.length;i++){

    arrNameFood.push(foodLest[i].foodName);
    arrPrice.push(foodLest[i].price);
}


// import chart 
var data = {
    labels: arrNameFood,
    datasets: [{
        label: "Food price",
        backgroundColor: "#000",
        borderColor: "#1A4D2E",
        borderWidth: 2,
        hoverBackgroundColor: "#1A4D2E",
        hoverBorderColor: "#000",
        data: arrPrice,
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            stacked: true,
            grid: {
                display: true,
                color: "rgba(255,99,132,0.5)"
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

new Chart('chart', {
    type: 'bar',
    options: options,
    data: data
});
