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
