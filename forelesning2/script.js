

var venn1 = "Thomas";
var venn2 = "Henrik";
var venn3 = "Nils";

var venner = ["Thomas", "Henrik", "Nils", "Espen"];

function printNavn(liste){
    for (var teller = 0; teller < liste.length; teller++) {
        console.log(liste[teller]);
    }
}


printNavn(venner);

console.log("______________________________");
venner.push("Truls");

venner[1] = "Marthe";

printNavn(venner);
console.log("______________________________");
venner.pop();

printNavn(venner);


var enPerson = ["Henrik", 28, 185, true];

var personNavn = ["Henrik", "Trude", "Nils"];
var personAlder = [28, 20, 45];
var paersonHøyde = [185, 169, 175];
var personErGutt = [true, false, true];

function printAllePersoner() {
    for (var nyTeller = 0; nyTeller < personNavn.length; nyTeller++) {
        var pronom;
        if (personErGutt[nyTeller]) {
            pronom = "Han";
        } else {
            pronom = "Hun"
        }
    
        console.log(
                    pronom + " heter " +personNavn[nyTeller] + " er " + personAlder[nyTeller] + "år gammel og er " + 
                    paersonHøyde[nyTeller] + "cm høy."
        );
    }
}

printAllePersoner();

function snittAlder(alder){
    var sittMiddlertidig = 0;
    
    for (var teller = 0; teller < alder.length; teller++){
        sittMiddlertidig = sittMiddlertidig + alder[teller];
    }
    
    var returVerdi = sittMiddlertidig / alder.length;
    
    return returVerdi;
}

console.log("Snittalder er " + snittAlder(personAlder));

//FUNKSJONER
function leggSammen(a, b) {
    return a + b;
}

function leggTilNyPerson(navn, alder, høyde, erGutt) {
    personNavn.push(navn);
    personAlder.push(alder);
    paersonHøyde.push(høyde);
    personErGutt.push(erGutt);
}

leggTilNyPerson("Tobias", 33, 178, true);
leggTilNyPerson("Lena", 25, 160, false);
printAllePersoner();
console.log("Ny snitt alder er " + snittAlder(personAlder));

var endaEtArray = [12, 46, 37, 29, 9];
var mittNyeSnittTall = snittAlder(endaEtArray);
console.log(mittNyeSnittTall);


//Array
// Liste med data, dataene kan være av alle type verdier. 
// Tall, Teskt, Boolsek verdier, funksjoner og array
// Indekser for hver gjenstand. Indeksen teller fra null til lengn-1
// Lengde = antall gjenstander
// Ønsker å legge til noe i et array .push(.......);
// Ønsker å ta ut siste gjenstand .pop(); 
// arrayet sitt navn : ArrayNavn[indeksen];

//Funksjoner
// Guppere funksjonalitet eller ting vi ønker å gjøre i en spesifik rekkeføge
// function hvaEnnDuØnskerÅKalleFunksjonenDin(argumenter FRIVILIGE)
// Mer enn et argument function navn(argument1, argument2, ...);
// Funskjoner har en kropp: { } -> Dette er usynlig for resten av koden din
// Return: returner koden din ut av funskjon. Hva enn som står etter return i funskjone din blir ALDRI kalt. 

function hvisPartallGang(a, b) {
    if (a % 2 === 0) {
        return a * a;
    } else if (b % 3 === 0) {
        return a + b;
    }
    
    return 0;
}


function returSantHvisDenInneholderHenrik(navn) {
    for (var i = 0; i < navn.length; i++) {
        if (navn[i] === "Henrik"){
            return true;
        }
    }
    return false;
}






























