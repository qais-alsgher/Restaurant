let getData=localStorage.getItem("food");
let arrFood=JSON.parse(getData); 
render(arrFood);

console.log(arrFood[0]['foodId']);



function render(arr) {
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

    for(let i=0;i<arr.length;i++){
    let tRow=document.createElement("tr");
    tF.appendChild(tRow);
    let tID=document.createElement('td');
    tRow.appendChild(tID);
    tID.textContent=arr[i]['foodId'];
    let tName=document.createElement('td');
    tRow.appendChild(tName);
    tName.textContent=arr[i]['foodName'];
    let tType=document.createElement('td');
    tRow.appendChild(tType);
    tType.textContent=arr[i]['type'];
    let tPrice=document.createElement('td');
    tRow.appendChild(tPrice);
    tPrice.textContent=`${arr[i]['price']} JD`;
    }}