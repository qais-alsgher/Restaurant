`use strict`;
//constructor food


function Food (foodname,type,price,foodId){
this.foodId=foodId;
this.foodName=foodname;
this.type=type;
this.price=price;
}

let foodMain=document.getElementById('tableF'); 
let tF=document.createElement("table");
foodMain.appendChild(tF);
let tRow=document.createElement("tr");
tF.appendChild(tRow);
let tID=document.createElement('th');
tRow.appendChild(tID);
tID.textContent="ID";
let tName=document.createElement('th');
tRow.appendChild(tName);
tName.textContent="Name";
let tType=document.createElement('th');
tRow.appendChild(tType);
tType.textContent="Type";
let tPrice=document.createElement('th');
tRow.appendChild(tPrice);
tPrice.textContent="Price";

Food.prototype.render= function() {

    let tRow=document.createElement("tr");
    tF.appendChild(tRow);
    let tID=document.createElement('td');
tRow.appendChild(tID);
tID.textContent=`${this.foodId}`;
let tName=document.createElement('td');
tRow.appendChild(tName);
tName.textContent=this.foodName;
let tType=document.createElement('td');
tRow.appendChild(tType);
tType.textContent=this.type;
let tPrice=document.createElement('td');
tRow.appendChild(tPrice);
tPrice.textContent=this.price;
}


function countId(){
    return (Math.floor(1000 + Math.random() * 9000));
}

const form=document.getElementById("formId");

form.addEventListener('submit',handLeSubmit);

function handLeSubmit(event){
event.preventDefault();
let foodName=event.target.foodName.value;
let type=event.target.type.value;
let price=event.target.price.value;
let foodId=countId();

let newFood=new Food(foodName,type,price,foodId);
newFood.render();
}

