const btnCounterElement = document.getElementById("btn-counter");
const btnResetElement = document.getElementById("btn-reset");
let counterElement = document.querySelector(".counter");
const containerElement = document.querySelector(".container");
const modalElement = document.querySelector(".overlay");
modalElement.style.display = "none";
const btnLetterElement = document.querySelector(".btn-letters");
const wordElement = document.querySelector(".word");

let img = document.createElement("img");

const lettersAlphabet = [
  "a",
  "б",
  "в",
  "г",
  "д",
  "ђ",
  "е",
  "ж",
  "з",
  "и",
  "ј",
  "к",
  "л",
  "љ",
  "м",
  "н",
  "њ",
  "о",
  "п",
  "р",
  "с",
  "т",
  "ћ",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "џ",
  "ш",
];
const hiddenWord = "kрагујевац";
const hiddenWordArray = hiddenWord.split("").splice(0, hiddenWord.length, "_");

const displayHiddenWord = () => {
  hiddenWordArray.map((e) => {
    let letter = document.createElement("li");
    letter.classList.add("letter");
    letter.innerHTML = e;
    wordElement.appendChild(letter);
  });
};
displayHiddenWord();

(function () {
  lettersAlphabet.map((let) => {
    let alphaBtn = document.createElement("li");
    alphaBtn.classList.add("allLetters");

    alphaBtn.innerHTML = let;

    btnLetterElement.appendChild(alphaBtn);
  });
})();

let counter = 0;

btnCounterElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (counter <= 5) {
    counter++;
    counterElement.textContent = `Број поена: ${counter}`;
    document.querySelector(".firstImage").style.display = "none";
    img.src = `images/vesalice_${counter}.png`;
    containerElement.prepend(img);
  } else {
    modalElement.style.display = "";
  }
});

btnResetElement.addEventListener("click", (e) => {
  e.preventDefault();
  modalElement.style.display = "none";
  counter = 0;
  counterElement.textContent = `Број поена: ${counter}`;
  img.src = `images/vesalice_${counter}.png`;
});

const checkLetters = () => {
  btnLetterElement.addEventListener("click", (e) => {
    e.preventDefault();
    const chosenLetter = e.target.innerHTML;
    console.log(hiddenWordArray, chosenLetter);
    if (hiddenWordArray.includes(chosenLetter)) {
      console.log("yes");
    } else {
      if (counter <= 5) {
        counter++;
        counterElement.textContent = `Број поена: ${counter}`;
        document.querySelector(".firstImage").style.display = "none";
        img.src = `images/vesalice_${counter}.png`;
        containerElement.prepend(img);
      } else if (counter === 6) {
        modalElement.style.display = "";
      }
    }
  });
};

checkLetters();
