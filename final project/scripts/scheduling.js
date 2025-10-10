let timeList = document.getElementById("appointment-time");

const times = [
  {time: "8:00am"},
  {time: "9:00am"},
  {time: "10:00am"},
  {time: "11:00am"},
  {time: "12:00pm"},
  {time: "1:00pm"},
  {time: "2:00pm"},
  {time: "3:00pm"},
  {time: "4:00pm"},
  {time: "5:00pm"},
];

const submitButton = document.getElementById("submitButton");
let submitAmount = 0;

function addToSelection(i){
    const addedItem = document.createElement("option");
    // addedItem.value = times[i].time;
    addedItem.innerHTML = `
        ${times[i].time}
    `;

    timeList.appendChild(addedItem);  
}

function addOption(callback){
    for(let i = 0; i < times.length; i++){
        callback(i);
    }
}



const scheduleInfo = {
  firstName: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  phoneNumber: document.getElementById("phone-number"),
  appointmentTime: document.getElementById("appointment-time"),

  printInfo: function(){
    const previousInfo = document.createElement("div");
    previousInfo.innerHTML = `
    <h3>${this.firstName}, ${this.lastName}</h3>
    <p>Number: ${this.phoneNumber}</p>
    <p>${this.appointmentTime}</p>
    `;
    document.querySelector(".previous-appointments").appendChild(previousInfo);
  }
}



function countUp() {
  submitAmount++;
}

addOption(addToSelection);
submitButton.addEventListener('click', countUp);

let appointmentCount = Number(localStorage.getItem('appointment-count')) || 0;
localStorage.setItem('appointment-count', appointmentCount);

document.getElementById('appointment-count').innerHTML = `
    You have scheduled ${appointmentCount} appointments with us!
`;

document.getElementById('appointment-count').textContent =
  `You have scheduled ${appointmentCount} appointments with us!`;

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  appointmentCount++;
  localStorage.setItem('appointment-count', appointmentCount);

  document.getElementById('appointment-count').textContent =
    `You have scheduled ${appointmentCount} appointments with us!`;
});

const authorName = "Ethan Atkinson | Utah";

const yearSpan = document.getElementById("currentyear");
const modifiedP = document.getElementById("lastModified");

const now = new Date();
const thisYear = now.getFullYear();
const lastModDate = new Date(document.lastModified);

if (yearSpan) {
  yearSpan.innerHTML = `&copy; | ${authorName} | ${thisYear}`;
}

if (modifiedP) {
  modifiedP.textContent = `Last Modified: ${lastModDate.toLocaleString()}`;
}
