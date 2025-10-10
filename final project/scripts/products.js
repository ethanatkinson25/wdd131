const productsClass = document.querySelector(".products-list");


const products = [
    {
      name: "Shaving Cream",
      id: 200441,
      price: 3.25,
      reviewRating: 3.5,
      imageUrl: "/final project/images/shaving-cream.webp"
    },
    {
      name: "Shaving Soap",
      id: 200591,
      price: 9.99,
      reviewRating: 4.8,
      imageUrl: "/final project/images/shaving-soap.webp"
    },
    {
      name: "Saftey Razor",
      id: 200990,
      price: 20.99,
      reviewRating: 4.4,
      imageUrl: "/final project/images/saftey-razor.webp"
    },
    {
      name: "Aftershave Splash",
      id: 200836,
      price: 7.25,
      reviewRating: 4.0,
      imageUrl: "/final project/images/aftershave.webp"
    },
    {
      name: "Shaving Brush",
      id: 200117,
      price: 4.99,
      reviewRating: 3.8,
      imageUrl: "/final project/images/shaving-brush.webp"
    },
    // {

    // },
    // {

    // }
];

function displayProducts(productsList){
  productsClass.innerHTML = ""; 

  for (const product of productsList){
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <h2>${product.name}</h2>
      <p>ID number: ${product.id}</p>
      <p>Price: $${product.price}</p>
      <img src="${product.imageUrl}" alt="${product.name}" loading="lazy" width="200">
    `
    productsClass.appendChild(productCard);
  }
}

displayProducts(products);

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