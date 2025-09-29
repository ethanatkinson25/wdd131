const hamburgerButton = document.querySelector("#menu");
const navigation  = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});

const authorName = "Ethan Atkinson | Utah";

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