const btnCounterElement = document.getElementById("btn-counter");
const btnResetElement = document.getElementById("btn-reset");
let counterElement = document.querySelector(".counter");
const containerElement = document.querySelector(".container");
const modalElement = document.querySelector(".overlay");
modalElement.style.display = "none";
const btnLetterElement = document.querySelector(".btn-letters");
const wordElement = document.querySelector(".word");

let img = document.createElement("img");
let counter = 6;
let hiddenWordArray = [];

const lettersAlphabet = [
  "а",
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

(function () {
  lettersAlphabet.map((let) => {
    let alphaBtn = document.createElement("li");
    alphaBtn.classList.add("allLetters");

    alphaBtn.innerHTML = let;

    btnLetterElement.appendChild(alphaBtn);
  });
})();

const hiddenWord = "стара пазова";

btnResetElement.addEventListener("click", (e) => {
  e.preventDefault();
  modalElement.style.display = "none";
  counter = 6;
  counterElement.textContent = `Број поена: ${counter}`;
  img.src = `images/vesalice_${counter}.png`;
});

const checkLetters = () => {
  hiddenWord.split("").map((e) => {
    e.includes(" ") ? (e = " ") : (e = "_");

    let letter = document.createElement("li");
    letter.classList.add("letter");
    letter.innerHTML = e;
    wordElement.appendChild(letter);
  });

  const ul = document.querySelector(".word");
  const liItems = ul.getElementsByTagName("li");

  for (let i = 0; i <= liItems.length - 1; i++) {
    hiddenWordArray.push(liItems[i].innerText);
  }
  console.log(hiddenWordArray);

  btnLetterElement.addEventListener("click", (e) => {
    e.preventDefault();
    const chosenLetter = e.target.innerHTML;

    if (hiddenWord.includes(chosenLetter)) {
      let i = hiddenWord.indexOf(chosenLetter);
      hiddenWordArray[i] = chosenLetter;
      liItems[i].innerText = chosenLetter;
      console.log(hiddenWordArray);
    } else {
      if (counter <= 6 && counter > 0) {
        counter--;
        counterElement.textContent = `Број поена: ${counter}`;
        document.querySelector(".firstImage").style.display = "none";
        img.src = `images/vesalice_${counter}.png`;
        containerElement.prepend(img);
      } else if (counter === 0) {
        modalElement.style.display = "";
      }
    }
  });
};

checkLetters();
