const authorName = "Ethan Atkinson | Utah";

const yearSpan = document.getElementById("currentyear");
const modifiedP = document.getElementById("lastModified");

const now = new Date();
const thisYear = now.getFullYear();
const lastModDate = new Date(document.lastModified);


let productList = document.getElementById("product");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const submitButton = document.getElementById("submitButton");
let submitAmount = 0;

function addToHTML(i){
    const addedItem = document.createElement("option");
    addedItem.value = products[i].id;
    addedItem.innerHTML = `
        ${products[i].name}
    `;

    productList.appendChild(addedItem);  
}

function addProductsList(callback){
    for(let i = 0; i < products.length; i++){
        callback(i);
    }
}

function countUp() {
    submitAmount = submitAmount + 1;
}

addProductsList(addToHTML);
submitButton.addEventListener('click', countUp);



if (yearSpan) {
  yearSpan.textContent = `${authorName} | ${thisYear}`;
}

if (modifiedP) {
  modifiedP.textContent = `Last Modified: ${lastModDate.toLocaleString()}`;
}