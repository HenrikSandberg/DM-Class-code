// Prøv å gjett hva disse blir med å skrive det i en kommentar under
// Prøv å legg dem inn i consolen i Chrome og se om du hadde rett

//1.
100 % 3

//SVAR:
//

//2.
("blah" + "blah")[6]

//SVAR:
//

//3.
"hello".length % "hi\\".length

//SVAR:
//

//4.
var x = 10;
var y = "a"

y === "b" || x >= 10
//SVAR:
//


//5. 
var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y)
//SVAR:
//


//6.
/* Skriv med tekst hva som vil komme ut av denne løkka. Ta løkka inn i consol i chrome og se om det som kom ut var det samme som du forventet
*/
var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

//SVAR:
/*

*/

//7.
/* Skriv med tekst hva som vil komme ut av denne løkka. Ta løkka inn i consol i chrome og se om det som kom ut var det samme som du forventet
*/
var num = 1

while(num <= 20) {
 if(num % 4 === 0){
   console.log(num);
 }
 num++;
}

//8.
/* Skriv med tekst hva som vil komme ut av denne løkka. Ta løkka inn i consol i chrome og se om det som kom ut var det samme som du forventet
*/
var num = 100;

while(num < 150) {
  console.log(num + 1);
  num--;
}

//9.
/* Skriv med tekst hva som vil komme ut av denne løkka. Ta løkka inn i consol i chrome og se om det som kom ut var det samme som du forventet
*/
for(var i = 0; i < 16; i+=8){
  console.log(i);
}

//10.
/* Skriv med tekst hva som vil komme ut av denne løkka. Ta løkka inn i consol i chrome og se om det som kom ut var det samme som du forventet
*/
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2){
  console.log(str[i]);
}








