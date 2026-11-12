<<<<<<< HEAD
const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0;

function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  header.textContent = `Clicked ${x} rgb(${r}, ${g}, ${b})`;
}
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}
inject("me");

btn.addEventListener("click", function () {
  x++;
  rgb();
});

function inject(item) {
    container.insertAdjacentHTML(
        "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}
items.forEach(inject);

const cartBUttons = document.querySelectorAll(".add-cart");
cartBUttons.forEach(function(button) {
    addEventListener("click", function () {
    x++;
    console.log("Added to cart.");});
});
=======
let cart = [
    {Name: "Burberry: For Women Eau De Parfum(3.4 OZ)", Price: "145.00", stock: "73"},
    {Name: "Coach: Floral Eau De Parfum(3.0 OZ)", Price: "129.00", stock: "86"},
    {Name: "Versace: Bright Crystal Eau De Toilette(3.0 OZ)", Price: "128.00", stock: "43"},
    {Name: "Billie Eilish Eau De Parfum(3.4 OZ)", Price: "82.00", stock: "64"},
    {Name: "Ralph Lauren: Romance Eau De Parfum(3.4 OZ)", Price: "140.00", stock: "39"},
    {Name: "Lancome: La Vie Est Belle Eau De Parfum(3.4 OZ)", Price: "164.00", stock: "92"},
    {Name: "Carolina Herrera: Good Girl Eau De Parfum(2.7 OZ)", Price: "164.00", stock: "17"},
    {Name: "Valentino: Donna Born In Roma Coral Fantasy Eau De Parfum(3.4 OZ)", Price: "180.00", stock: "32"},
    {Name: "Jimmy Choo: I Want Choo Eau De Parfum(3.4 OZ)", Price: "150.00", stock: "115"},
    {Name: "Gucci: Flora Gorgeous Gardenia Eau De Parfum(3.4 OZ)", Price: "181.00", stock: "79"},
    {Name: "Marc Jacobs: Perfect Eau De Parfum(3.4 OZ)", Price: "165.00", stock: "42"},
    {Name: "Valentino: Donna Born In Roma Eau De Parfum(3.4 OZ)", Price: "180.00", stock: "11"},
    {Name: "Ariana Grande: Ari Eau De Parfum(3.4 OZ)", Price: "72.00", stock: "81"},
    {Name: "Paris Hilton: Heiress Eau De Parfum(3.4 OZ)", Price: "70.00", stock: "12"},
    {Name: "Yves Saint Laurent: Mon Paris Eau De Parfum(3.0 OZ)", Price: "162.00", stock: "65"},
    {Name: "Lattafa: Dynasty Eau de Parfum(3.4 OZ)", Price: "50.00", stock: "21"},
    {Name: "Burberry: Goddess Eau De Parfum(3.4 OZ)", Price: "181.00", stock: "43"},
    {Name: "Marc Jacobs: Daisy Love Eau De Toilette(3.4 OZ)", Price: "142.00", stock: "56"},
    {Name: "Ella's poopy shoe", Price: "12.26", stock: "2"},
    {Name: "Olivia Lu", Price: "14.99", stock: "1"},
]
>>>>>>> 0d17ffa6c0182ea9cb30921d4a67ccd69be6e335
