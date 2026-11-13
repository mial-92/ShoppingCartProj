let item = [
    {Name: "Ariana Grande: Ari Eau De Parfum(3.4 OZ)", Price: "72.99", Stock: "81", img:"photos/ArianaGrande.avif"},
    {Name: "Billie Eilish Eau De Parfum(3.4 OZ)", Price: "82.99", Stock: "64", img:"photos/Billie Eilish.avif"},
    {Name: "Burberry: For Women Eau De Parfum(3.4 OZ)", Price: "145.99", Stock: "73", img:"photos/Burberry1.webp"},
    {Name: "Burberry: Goddess Eau De Parfum(3.4 OZ)", Price: "181.99", Stock: "43", img:"photos/Burberry2.avif"},
    {Name: "Carolina Herrera: Good Girl Eau De Parfum(2.7 OZ)", Price: "164.99", Stock: "17", img:"photos/Carolina Herrera.avif"},
    {Name: "Coach: Floral Eau De Parfum(3.0 OZ)", Price: "129.99", Stock: "86", img:"photos/Coach.webp"},
    {Name: "Gucci: Flora Gorgeous Gardenia Eau De Parfum(3.4 OZ)", Price: "181.99", Stock: "79", img:"photos/gucci.avif"},
    {Name: "Jimmy Choo: I Want Choo Eau De Parfum(3.4 OZ)", Price: "150.99", Stock: "115", img:"photos/JimmyChoo.webp"},
    {Name: "Lancome: La Vie Est Belle Eau De Parfum(3.4 OZ)", Price: "164.99", Stock: "92", img:"photos/Lancome.webp"},
    {Name: "Lattafa: Dynasty Eau de Parfum(3.4 OZ)", Price: "50.99", Stock: "21", img:"photos/Lattafa.webp"},
    {Name: "Marc Jacobs: Perfect Eau De Parfum(3.4 OZ)", Price: "165.99", Stock: "42", img:"photos/MarcJacobs1.webp"},
    {Name: "Marc Jacobs: Daisy Love Eau De Toilette(3.4 OZ)", Price: "142.99", Stock: "56", img:"photos/MarcJacobs2.webp"},
    {Name: "Paris Hilton: Heiress Eau De Parfum(3.4 OZ)", Price: "70.99", Stock: "12", img:"photos/Paris Hilton.webp"},
    {Name: "Ralph Lauren: Romance Eau De Parfum(3.4 OZ)", Price: "140.99", Stock: "39", img:"photos/Ralph Lauren.avif"},
    {Name: "Valentino: Donna Born In Roma Coral Fantasy Eau De Parfum(3.4 OZ)", Price: "180.00", Stock: "32", img:"photos/Valentino1.avif"},
    {Name: "Valentino: Donna Born In Roma Eau De Parfum(3.4 OZ)", Price: "180.99", Stock: "11", img:"photos/valentino2.webp"},
    {Name: "Versace: Bright Crystal Eau De Toilette(3.0 OZ)", Price: "128.99", Stock: "43", img:"photos/versace.webp"},
    {Name: "Yves Saint Laurent: Mon Paris Eau De Parfum(3.0 OZ)", Price: "162.99", Stock: "65", img:"photos/Yves Saint Laurent.avif"},
    {Name: "Ella's poopy shoe", Price: "12.26", Stock: "2", img:"photos/ella.jpg"},
    {Name: "Olivia Lu", Price: "14.99", Stock: "1", img:"photos/liverbee.jpg"}
]
function inject(item) {
  const container = document.querySelectorAll(".container");
    container.insertAdjacentHTML(
        "beforeend",
    `<div class="card">
        <h2 class="card-title">${item.Name}</h2>
        <img 
        class="card-img"
        src="${item.img}" 
        alt="${item.img}"  />
      </div> `
  );
}
items.forEach(inject);

const cartBUttons = document.querySelectorAll(".add-cart");
cartBUttons.forEach(function(button) {
    addEventListener("click", function () {
    x++;
    console.log("Added to cart.");});
});

const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0;

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

