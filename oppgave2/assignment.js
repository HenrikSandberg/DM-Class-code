
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