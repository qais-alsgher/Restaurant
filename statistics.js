let getData = localStorage.getItem("food");
let arrFood = JSON.parse(getData);
render(arrFood);


function render(arr) {
    //create a heder of table
    let foodMain = document.getElementById('tableF');
    let tF = document.createElement("table");
    foodMain.appendChild(tF);
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let tID = document.createElement('th');
    tRow.appendChild(tID);
    tID.textContent = "ID";
    let tName = document.createElement('th');
    tRow.appendChild(tName);
    tName.textContent = "Name";
    let tType = document.createElement('th');
    tRow.appendChild(tType);
    tType.textContent = "Type";
    let tPrice = document.createElement('th');
    tRow.appendChild(tPrice);
    tPrice.textContent = "Price";
if(arr===null){
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let enptyT =document.createElement('td');
    tRow.appendChild(enptyT);
    enptyT.textContent="The Table is Enpty ";
    enptyT.colSpan="4";
    enptyT.style.textAlign="center";
}
else{
    //create a body of table  
    for (let i = 0; i < arr.length; i++) {
        let tRow = document.createElement("tr");
        tF.appendChild(tRow);
        let tID = document.createElement('td');
        tRow.appendChild(tID);
        tID.textContent = arr[i]['foodId'];
        let tName = document.createElement('td');
        tRow.appendChild(tName);
        tName.textContent = arr[i]['foodName'];
        let tType = document.createElement('td');
        tRow.appendChild(tType);
        tType.textContent = arr[i]['type'];
        let tPrice = document.createElement('td');
        tRow.appendChild(tPrice);
        tPrice.textContent = `${arr[i]['price']} JD`;
    }
    }
}


// let clear =document.getElementById('clear');

// clear.addEventListener('button')