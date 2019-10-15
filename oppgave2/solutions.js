
//LØSNINGSFORSLAG
//Oppgave 1
//Svar: 67
//Svar: 96
//Svar: Undefined

//Oppgave 2
var array = [1,2,3,4,5];
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.push(6);
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Oppgave 3
//Svar: X = 3;
//Svar: Y = John;

//Oppgave 4
//test(10, 40); SVAR: 30
//test(5, 10); SVAR: -5

//Oppgave 5
//andreTest(40); SVAR: 80

//Oppgave 6
function returnerStørst(tall1, tall2) {
    if (tall1 >= tall2) {
        return tall1;
    } else {
        return tall2;
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

//Oppgave 9
function printStars(tall) {
    var stars = "";
    for (var i = 0; i <= tall; i++) {
        stars = stars + "*";
        console.log(stars);
    }
}