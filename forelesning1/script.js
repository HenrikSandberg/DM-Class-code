
// Dette er en kommentar og vil ikke bli kjørt som kode. 
// De er ment å vise til dere tekst 

// Text eller string
// Alt tekst innhold. For å deklarere at noe er tekst bruker vi ''  
// eller ""
var navn = "Henrik";
navn = "Meea";

// Number
// Alle heltall og desimaltall
// Int, short, long og dobble og float
var tall = 123;

// + - * / %
tall = 1;
tall = tall + tall;
tall * 1000;

console.log("Hei på deg!");
console.log(tall);
console.log(navn);
console.log(navn + " og liker tallet " + tall);

// Boolean - Bools uttrykk
// Noe er sant eller usant - 1 eller 0
var erStudent = false;
var erProfessor = false;

// Ukjent og udefinert
var ukjent = undefined;
var absoluttNull = null;

// IF ELSE
if (erStudent) {
    console.log("Hei kjære student");
} else if (erProfessor) {
    console.log("God dag professor");
} else {
    console.log("Du er ikke ansatt eller student. Hvem er du!");
}


// Boolske Opperasjoner
// < minder enn
// > større enn
// <= mindre eller lik
// >= større eller lik
// !== ikke lik
// === lik 

var alder;
var aldersgrense = 20;
var nyttNavn = null;


alder = prompt("Tast inn din alder");

if (parseInt(alder) >= aldersgrense) {
    alert("Velkommen!");
} else {
    alert("Du er ikke gammel nok desverre");
}

// LØKKER
// While
var teller = 0;

while (teller < 10) {
    console.log(teller);
    teller = teller + 1;
}

console.log("Etter løkka er kjørt så er teller = " + teller);

while (nyttNavn === null) {
    nyttNavn = prompt("Vendligst oppgi navnet ditt");

    if (nyttNavn !== null) {
        alert("Velkommen " + nyttNavn);
    }   
}

// FOR
// teller, et boolsk utrykk og en oppdatering av telleren
for (var nyTeller = 0; nyTeller < 10; nyTeller = nyTeller + 1) {
    console.log(nyTeller);
}
for (var i = 0; i < 10; i++){
    
} 























