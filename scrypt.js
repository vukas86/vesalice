const btnCounterElement = document.getElementById("btn-counter");
const btnResetElement = document.getElementById("btn-reset");
let counterElement = document.querySelector(".counter");
const containerElement = document.querySelector(".container");
const modalElement = document.querySelector(".overlay");
modalElement.style.display = "none";
let img = document.createElement("img");

let counter = 0;

btnCounterElement.addEventListener("click", (e) => {
  if (counter < 6) {
    counter++;
    counterElement.textContent = counter;
    document.querySelector(".firstImage").style.display = "none";

    img.src = `images/vesalice_${counter}.png`;
    containerElement.prepend(img);
    console.log(img);
  } else if ((counter = 6)) {
    modalElement.style.display = "";
  }
});

btnResetElement.addEventListener("click", (e) => {
  e.preventDefault();
  modalElement.style.display = "none";
  counter = 0;
  counterElement.textContent = counter;
  img.src = `images/vesalice_${counter}.png`;
});
