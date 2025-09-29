const authorName = "Ethan Atkinson | Utah";
const albumClass = document.querySelector(".album");

const yearSpan = document.getElementById("currentyear");
const modifiedP = document.getElementById("lastModified");

const now = new Date();
const thisYear = now.getFullYear();
const lastModDate = new Date(document.lastModified);

if (yearSpan) {
  yearSpan.textContent = `${authorName} | ${thisYear}`;
}

if (modifiedP) {
  modifiedP.textContent = `Last Modified: ${lastModDate.toLocaleString()}`;
}

const hamburgerButton = document.querySelector("#menu");
const navigation  = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Boston Massachusetts Temple",
    location: "Boston, Massachusetts",
    dedicated: "2000 October 1",
    area: 69600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
  },
  {
    templeName: "Feather River California Temple",
    location: "Yuba City, California",
    dedicated: "2023 October 8",
    area: 41665, 
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/feather-river-california-temple/feather-river-california-temple-39697-main.jpg"
  },
  {
    templeName: "Fairbanks Alaska Temple",
    location: "Fairbanks, Alaska",
    dedicated: "2025 September 27",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fairbanks-alaska-temple/fairbanks-alaska-temple-55375-main.jpg"
  }
];

function displayTemples(list){
  albumClass.innerHTML = ""; 
  list.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.className = "temple-card";

    

    templeCard.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedication Date: ${temple.dedicated}</p>
      <p>Area in sq feet: ${temple.area.toLocaleString()}</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="290" height="145">
    `;

    albumClass.appendChild(templeCard);
  });
}

displayTemples(temples);

const nav = document.querySelector(".navigation");
nav.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() === "a"){
    const type = event.target.dataset.filter;
    if (type){
      filterTemples(type);
    }else {
      displayTemples(temples);
    }
  }
});


function filterTemples(type) {
    let selectedTemple = temples;
    if (type === "old") {
      selectedTemple = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 2000);
    } else if (type === "new") {
      selectedTemple = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) >= 2000);
    } else if (type === "large") {
      selectedTemple = temples.filter(temple => temple.area > 90000);
    } else if (type === "small") {
      selectedTemple = temples.filter(temple => temple.area < 10000);
    }

    displayTemples(selectedTemple);
}