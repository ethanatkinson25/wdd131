
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

window.addEventListener('DOMContentLoaded', () => {
  const T = parseFloat(document.getElementById('temp').textContent);
  const V = parseFloat(document.getElementById('speed').textContent);

  const isImperial = document.body.textContent.includes('°F');
  const viable = isImperial
    ? (T <= 50 && V > 3)
    : (T <= 10 && V > 4.8);

  const display = viable
    ? calculateWindChill(T, V, isImperial ? 'F' : 'C').toFixed(1) + (isImperial ? ' °F' : ' °C')
    : 'N/A';

  document.getElementById('wind-chill').textContent = display;
});

function calculateWindChill(T, V, units) {
  return units === 'F'
    ? 35.74 + 0.6215 * T - 35.75 * V ** 0.16 + 0.4275 * T * V ** 0.16
    : 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
}
