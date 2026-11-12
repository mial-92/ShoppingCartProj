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