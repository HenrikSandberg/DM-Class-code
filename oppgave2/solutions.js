
//LØSNINGSFORSLAG
//Oppgave 6
function returnerStørst(tall1, tall2) {
    if (tall1 >= tall2) {
        return tall1;
    }
}

//Oppgave 7
function addPartall(tall1, tall2) {
    if (tall1 % 2 === 0 && tall2 % 2 === 0) {
        return tall1 * tall2;
    } else {
        return tall1 + tall2;
    }
}

//Oppgave 8
function stjerner(numberOfStars) {
    var str = "";
    for (var i = 0; i <= numberOfStars; i++ ){
        str = str + "*";
    }
    return str;
}