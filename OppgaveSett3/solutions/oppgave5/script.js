let conteiner = document.querySelector("#conteiner");
let messageDisplay = document.querySelector("#message");
let colorDisplay = document.querySelector("#colorDisplay");
let squres = document.querySelectorAll(".squeres");
let h1 = document.querySelector("h1");
let newGame = document.getElementById("newGame");
let modeBtn = document.getElementsByClassName("mode");
let gameTag = document.querySelector("#gameTag");

let colors = [];
let rightAnwser = "";
let foundAwnser = false;
let isHard = true;


//Med en gang siden åpnes.
setUpNewGame(6);

//Velger et tilfeldig tall
function setRandumNumber(num) {
    return Math.floor(Math.random() * num);
}

//Genererer en tilfeldig farge og putt dem in i et array. 
//Arrayet skal returneres.
function generatRandumColors(number) {
    let c = [];

    for (i = 0; i < number; i++) {
        c.push("rgb(" + setRandumNumber(256) + ", " + setRandumNumber(256) + ", " + setRandumNumber(256) + ")");
    }
    return c;
}

//Setter fager per firkan på skjerm 
function settSquers() {
    for (i = 0; i < squres.length; i++) {
        squres[i].style.backgroundColor = colors[i] === undefined ? "#232323" : colors[i];
    }
}

//Sett svar. Velg en av de tilfeldig generete fargene og sett dem til å være svartet 
function settAnswer() {
    return colors[setRandumNumber(colors.length)];
}


//Setter en lytter til hver av divene
for (i = 0; i < colors.length; i++) {
    squres[i].addEventListener("click", function () {
        if (!foundAwnser) {
            this.style.backgroundColor === rightAnwser ? correct() : worng(this);
        }
    });
}


//Når bruker klarer å velge riktig!
function correct() {
    for (i = 0; i < colors.length; i++) {
        squres[i].style.backgroundColor = rightAnwser;
    }

    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = rightAnwser;
    gameTag.textContent = "Play Again?";
    newGame.textContent = "Play Again?";

    foundAwnser = true;
}

//Hvis bruker trykker på feil farge
function worng(item) {
    item.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again";
}

//Legger til lyttere for for nytt spill knappen
//Legg merke til at den ikke ligger i en funskjon
newGame.addEventListener("click", function () {
    setUpNewGame(isHard ? 6 : 3);
});

//For loop igjennom begge mode knappene i spillet. 
//Bytter klasser på dem for å bytte modus på spille.
//Tilslutt setter den opp et nytt spill.
for (i = 0; i < modeBtn.length; i++) {

    modeBtn[i].addEventListener("click", function () {
        if (!this.classList.contains("selected")) {

            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");

            this.classList.add("selected");

            setUpNewGame(this === modeBtn[0] ? 3 : 6);
        }
    });

}

//Gjør alle oppsett nødvendig for å resette spillet
function setUpNewGame(num) {
    isHard = num === 6 ? true : false;

    h1.style.backgroundColor = "steelblue";
    newGame.textContent = "New Colors";
    gameTag.textContent = "Color Guessing Game!";

    colors = generatRandumColors(num);
    rightAnwser = settAnswer();
    settSquers();

    messageDisplay.textContent = "";
    colorDisplay.textContent = rightAnwser;
    foundAwnser = false;
}
