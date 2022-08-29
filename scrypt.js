const btnCounterElement = document.getElementById("btn-counter");
const btnResetElement = document.getElementById("btn-reset");
let counterElement = document.querySelector(".counter");
let pointsElement = document.querySelector(".points");
const containerElement = document.querySelector(".container");
const modalElement = document.querySelector(".overlay");
modalElement.style.display = "none";
const btnLetterElement = document.querySelector(".btn-letters");
const wordElement = document.querySelector(".word");

let img = document.createElement("img");
let counter = 6;
let points = 0;
let hiddenWordArray = [];

const ul = document.querySelector(".word");
const liItems = ul.getElementsByTagName("li");

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

const hiddenWordsArray = ["београд", "јагодина", "горњи милановац"];
let randomHiddenWord =
  hiddenWordsArray[Math.floor(Math.random() * hiddenWordsArray.length)];

btnResetElement.addEventListener("click", (e) => {
  e.preventDefault();
  modalElement.style.display = "none";
  counter = 6;
  counterElement.textContent = `Број поена: ${counter}`;
  img.src = `images/vesalice_${counter}.png`;
  window.location.reload();
});

const renderHiddenWord = () => {
  randomHiddenWord.split("").map((e) => {
    e.includes(" ") ? (e = " ") : (e = "_");
    let letter = document.createElement("li");
    letter.classList.add("letter");
    letter.innerHTML = e;
    wordElement.appendChild(letter);
  });
  for (let i = 0; i <= liItems.length - 1; i++) {
    hiddenWordArray.push(liItems[i].innerText);
  }
};

renderHiddenWord();

const checkLetters = () => {
  btnLetterElement.addEventListener("click", (e) => {
    e.preventDefault();
    const chosenLetter = e.target.innerHTML;

    if (!e.target.classList.contains("btn-letters")) {
      e.target.classList.add("disabled");
      if (randomHiddenWord.includes(chosenLetter)) {
        let newArray = randomHiddenWord.split("");
        newArray.forEach((el, indx) => {
          if (newArray[indx] === chosenLetter) {
            points++;
            pointsElement.textContent = `Број поена: ${points}`;
            hiddenWordArray[indx] = chosenLetter;
            liItems[indx].innerText = chosenLetter;
          }
        });
      } else {
        if (counter <= 6 && counter > 0) {
          counter--;
          counterElement.textContent = `Број поена: ${counter}`;
          document.querySelector(".firstImage").style.display = "none";
          img.src = `images/vesalice_${counter}.png`;
          containerElement.prepend(img);
        }
        if (counter === 0) {
          modalElement.style.display = "";
          document.querySelector(".modal-points").style.display = "none";
        }
      }
    }
    // window.localStorage.setItem("points", `${points}`);
    window.localStorage.setItem("counter", `${counter}`);

    if (!hiddenWordArray.includes("_")) {
      window.localStorage.setItem("points", `${points + 10}`);
      wordElement.innerHTML = "";
      hiddenWordArray = [];
      console.log(hiddenWordArray);
      const btnEl = document.getElementsByClassName("allLetters");
      for (el of btnEl) {
        el.classList.remove("disabled");
      }
      randomHiddenWord =
        hiddenWordsArray[Math.floor(Math.random() * hiddenWordsArray.length)];
      renderHiddenWord();
    }
  });
};

checkLetters();
