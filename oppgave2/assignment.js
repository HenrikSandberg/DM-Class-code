
//Oppgave 1

var numbers = [22, 67, 33, 96, 88];
//Hva vil de under skrive ut? 
//Test først for så å åpne i konsollen å se på svaret. 
//Var det du forventet?
console.log(numbers[1]); //SVAR:
console.log(numbers[3]); //SVAR:
console.log(numbers[numbers.length]); //SVAR:

//Oppgave 2
//Lag et array som innholder minst fem unike tall. 
//Lag en løkke som skriver ut alle tallene du har lagt inn i arrayet
//Legg til et tall til i arrayet ditt og ikke endre på løkka
//Klarer den fremdeles å skrive ut alle tallene?

//Oppgave 3
//Hva vil de under skrive ut? 
//Test først for så å åpne i konsollen å se på svaret. 
//Var det du forventet?

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;  //SVAR: 
var y = person[0]; //SVAR: 


//Oppgave 3
function test(x,y) {
    return y - x;
}
  
test(10, 40); //SVAR:
test(5, 10); //SVAR:


//Oppgave 4
function test(x) {
    return x*2;
    console.log(x);
    return x/2; 
}
  
test(40); //SVAR: 

//Oppgave 5
/*
Lag en funksjon som tar inn to tall og returer det største tallet
eks:
function returnerStørst(tall1, tall2) {
    //Din kode
}

addPartall(2, 2) //Return 2
addPartall(3, 2) //Return 3
addPartall(2, 6) //Return 6
*/

//Oppgave 6
/*
Lag en funksjon som tar inn to tall, dersom BEGGE 
tallene er par tall så skal de ganges sammen.

Hvis ikke så skal funksjonen returere tallene plusset sammen

eks:
function addPartall(tall1, tall2) {
    //Din kode
}
addPartall(2, 6) //Return 12
addPartall(2, 3) //Return 5
*/

//Oppgave 7
/* Lag en funskjon som var inn et argument som er et tall.
Så går du igjennom med en løkke å legger til "*"  for det antallet tall 
som komm inn med argumentet. På slutten returerer du strengen med stjerner

eks:
function stjerner(numberOfStars){
    //Dette er oppgaven
}

var minStjerneStreng = stjerner(5);
console.log(minStjerneStreng) //Skal skrive "*****""
*/