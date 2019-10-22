//Få tak i følgene elementer fra HTML-en
//#conteiner, #message, #colorDisplay, .squeres, h1, newGame, mode, og #gameTag

let colors = [];
let rightAnwser = "";
let foundAwnser = false;
let isHard = true;


//Med en gang siden åpnes.
setUpNewGame(6);

//Velger et tilfeldig tall
function setRandumNumber(num) {
    let rand = Math.floor(Math.random() * num);
    return rand;
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
        if (colors[i] === undefined) {
            //sett hver firkant til å ha samme farge som bakgrunnen
        } else {
            // sett firkanten til å være lik colors[i];
        }
    }
}

//Sett svar. Velg en av de tilfeldig generete fargene og sett dem til å være svartet 
function settAnswer() {
    //returner en tilfeldig farge og sett den inn i arrayet 
}


//Sett event listenere på hver av firkantene.
//Hvis fargen i firkanten er lik rightAnwser, så kjører dere funskjoen correct()
//Hvis ikke så sender dere this til worng() funksjonen
for (i = 0; i < colors.length; i++) {
    //Din kode her
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
//Hvis knappen blir trykket på så setter dere opp et nytt spill med setUpNewGame()
//Den funksjoen trenger et tall, send inn 6 dersom bruker har valgt isHard
//Send 3 dersom den er false

//For loop igjennom begge mode knappene i spillet. 
//Bytter klasser på dem for å bytte modus på spille.
//Tilslutt setter den opp et nytt spill.
for (i = 0; i < modeBtn.length; i++) {

    modeBtn[i].addEventListener("click", function () {
        if (!this.classList.contains("selected")) {

            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");

            this.classList.add("selected");

            if (this === modeBtn[0]) {
                setUpNewGame(6);
            } else {
                setUpNewGame(3);
            }
        }
    });

}

//Gjør alle oppsett nødvendig for å resette spillet
function setUpNewGame(num) {
    if (num === 6) {
        isHard = true;
    } else {
        isHard = false;
    }

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
