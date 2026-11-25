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
    {Name: "Ella's poopy shoe", Price: "0.02", Stock: "2", img:"photos/zella.jpg"},
    {Name: "Olivia Bee", Price: "52.66", Stock: "1", img:"photos/zliverbee.jpg"}
]

let cart = {};
let cartTotal = 0;
const container = document.querySelector(".container");
function inject(item, index) {
  container.insertAdjacentHTML(
    "beforeend",
      `<div class="card" data-item="${index}">
        <h2 class="card-title">${item.Name}</h2>
        <img class="card-img" src="${item.img}" alt="${item.img}">
        <b><p class="card-price">$${item.Price}</p></b>
      <div class="button-container">
        <button class="minus" data-index="${index}">-</button>
        <p id="quantity${index}">0</p>
        <button class="add">+</button>
      </div>
    </div>`
  );}
item.forEach(inject);


// ADD BUTTONS

const buttons = document.querySelectorAll(".add");
buttons.forEach((button) =>
  button.addEventListener("click", function(event) { // waits for someone to click it
    let dataItem = event.target.closest(".card").getAttribute("data-item"); 
    // identifies the button that was clicked, 
    // finds the product card containing that button, gets that product
    addToCart(item[dataItem], dataItem);
  }));

// MINUS BUTTONS
const minusButtons = document.querySelectorAll(".minus");
minusButtons.forEach((button) =>
  button.addEventListener("click", function(event) {
    let dataItem = event.target.closest(".card").getAttribute("data-item");
    removeFromCart(item[dataItem], dataItem);
  }));

// ADD PERFUME TO CART
function addToCart(item, id) {
  const entries = document.getElementById("entries"); // finds area where cart products appear
  if (item.Stock > 0) { //  if the product is in stock
    if (cart[id]) { //  if product is already in stock
      if (cart[id].qty < Number(item.Stock)) {
        cart[id].qty++;
        cartTotal += Number(item.Price);
        let entryAmt = document.getElementById(`${id}amt`);
        let entry = document.getElementById(id);
        entryAmt.remove();
        entry.insertAdjacentHTML(
          "beforeend",
          `<p id="${id}amt">×${cart[id].qty}</p>`
        );}
    } else {
      cart[id] = item;
      cart[id].qty = 1;
      cartTotal += Number(item.Price);
      entries.insertAdjacentHTML(
        "beforeend",
        `<div id="${id}" class="entry">
          <h2>${item.Name}</h2>
          <p id="${id}amt">×1</p>
        </div>`
      );}

    updateQuantity(id);
    updateTotal();
    document.querySelector(".pop").style.display = "block";
  }}

// REMOVE ONE PERFUME
function removeFromCart(item, id) {
  if (cart[id]) {
    cart[id].qty--;
    cartTotal -= Number(item.Price);
    let entry = document.getElementById(id);
    let entryAmt = document.getElementById(`${id}amt`);
    entryAmt.remove();
    if (cart[id].qty > 0) {
      entry.insertAdjacentHTML(
        "beforeend",
        `<p id="${id}amt">×${cart[id].qty}</p>` 
      );
    } else {
      entry.remove(); // removes the product from the cart 
      delete cart[id]; // deletes the product 
    }
    updateQuantity(id);
    updateTotal();
    document.querySelector(".pop").style.display = "block";
  }}

// UPDATE QUANTITY ON PRODUCT CARD
function updateQuantity(id) {
  let quantity = document.getElementById("quantity" + id);
  let number = cart[id] ? cart[id].qty : 0;
  quantity.insertAdjacentHTML(
    "afterend", // insert new html immedietly after an element. in this case it would place the updated quantity immedietly after the old one
    `<p id="quantity${id}">${number}</p>` // created paragraph showing how many perfumes were selected
  );
  quantity.remove();
}

// UPDATE CART TOTAL
function updateTotal() {
  let total = document.getElementById("total");
  let totalPrice = document.getElementById("total-price");
  totalPrice.remove();
  total.insertAdjacentHTML(
    "beforeend",
    `<p id="total-price">${cartTotal.toFixed(2)}</p>`
  );}