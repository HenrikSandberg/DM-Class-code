# DM-Class-code
## Typer
I JavaScript har vi en rekke forskjellige typer. 
- String er tekst typen i JavaScript og kan deklareres enten med ‘’ eller «». Dette gjør det tydelig for tatasaskinen at hva du skriver er tekst og ikke tall eller noe annet. 
- Tall i JavaScript er alle heltall, det vil si både positive og negative tall, samt alle desimaltall. 
- Boolkse variabler er verdier som enten er sant eller ikkesant. Disse brukes først og fremst i boolske operasjoner. 
- I tillegg til disse tre hovedtypene så har vi også de udefinerte. Disse har ingen verdi.

```js
//Numbers
4
9.3
-10

//Strings
"Hello World"
"43"

//Booleans
true
false

//null and undefined
null
undefined
```

### Matematikk med tall
Vi kan gjøre mattematikk på tall. 
```js
4 + 10     //14
1/5        //0.2

// Modulo - remainder operator
// Ser etter hvor mange ganger et tall går opp i et annet
// hvis du skriver 10%2 vil du få 0. Det vil si, 2 går opp i 10
// 5 ganger. 2+2+2+2+2 = 10
// Dersom du skriver 10%3 vil du få svaret 1. En er da retsen
// siden 3 bare går opp i 10 3 ganger. 3+3+3+1 = 10

10 % 3   //1
24 % 2   //0
15 % 11  //4
```

### Tekst
```js
"hello world"
'hello world'

//Concatenation
"charlie" + "brown"  //"charliebrown"

//Du kan sjekke lengden til en tekst
"hello world".length  //11

//Access individual characters using [] and an index
//Du kan få tilgang til en karakter i en tekst ved å skrive [] og index plassen dens. Indexer starter på 0 og teller opp fra der. 
"hello"[0]  //"h"
"hello"[4]  //"o"
```

## Variabler
Variabler er en konteiner som kan holde på verdier for deg slik at du kan bruke dem igjen senere. 

```js
var yourVariableName = yourValue;

//De kan lagre alle verdiene vi har sett på til nå
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

// Du kan kalle på verdien ved å kalle på navnet du lagde til den
var name = "Rusty";
"hello there " + name    //"hello there Rusty"

var num = 37;
num + 3 + 10    //50

// Vi kan også endre på den lagrede verdien ved å sette navnet på venstreside, et likhetstegn også hva enn du ønsker å sette den til. 
var name = "Robert";
name = "Bob";
```

## Ukjente verdier

```js
// De to siste primitivene er null og undefined

//Variabler som har fått et navn, men ikke en verdi er automatisk undefined.
var name;
var age;

//null er explisitt ingenting
var currentPlayer = "charlie";
currentPlayer = null;   //game over
```

## If, else if og else
Datamaskiner brukes først og fremst til å gjennomføre kode basert på om noe er sant eller ikke. Du kan sette flere sammen, det spiller ingen rolle hvor mange du setter sammen, bare vit at dersom du ønsker at mer enn en skal skje så er det bedre så sette dem hver for seg. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
}
```

I tilfellet over dersom a ikke er mindre enn b så vil ikke koden inne mellom krøll parentesene kjøre. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
} else {
	// Kode som kjører dersom a ikke er mindre enn b
}
```

I dette tilfellet vil alltid enten if delen eller else delen kjøre. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
} else if (a === b) {
	//Kode som vil kjøre dersom a er lik b
} else {
	// Kode som kjører dersom a ikke er mindre enn b
}
```

I dette tilfellet så har vi to alternativer først. Dersom if delen ikke er sant så sjekker vi else if delen. Hvis det er sant så kjører den koden. Hvis ikke det er sant så kjører else. Vit at du ikke trenger else delen dersom du ikke ønsker at noe skal skje dersom de to kjører og ingen ting skjer. Du kan også legge til flere `else if`  dersom du ønsker det. 

## Boolkse operatorer
Det er en rekke oprasjoner vi kan gjøre på alle bookes utrykk. Disse kan brukes for å sammenlikne to verdier. 
```js
// < minder enn
// > større enn
// <= mindre eller lik
// >= større eller lik
// !== ikke lik
// === lik 
```

Vi kan også sette sammen to boolske uttrykk dersom vi ønsker at enten en av to er sanne, eller for å passe på at to ting er sanne samtidig. 

```js
// && to boolkse uttrykk må begge være sanne
// || den første eller andre må være sann
```

### ! - Operasjon
Ved å sette ! foran en boolsk variabel så gjør vi den til det motsatte av hva enn det var i utgangspunktet. 
```js
var erLoggetInn = false

if (!erLoggetInn) {
	// Denne koden vil nå kjøre siden fals blir til true.
}

```

## Løkker
Hva om vi ønsker å printe alle tall mellom 1 og 10. 
```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

Dette er ekstremt konotete og ikke noe vi ønsker å skrive. Derfor har vi løkker! Vi ønsker å holde koden vår så enkel som mulig. Det gjør det lettere både å lese igjennom. 

### While
```js
while(et_boolsk_utrykk) {
  //Kode som vil kjøre om og om igjen helt til 
}
```

En enkel løkke som skal telle fra 1 til 5 kan skrives på følgende måte:
```js
var count = 1;

while(count < 6) {
 console.log("count is: " + count);
 count++;
}

// Consolen
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5
```

#### Evige løkker
Vi kan generer evige løkker noe som er kjipt fordi det vil krasje nettleseren din
```js
var count = 0;

while(count < 10) {
 console.log(count);
}
```
Denne løkka slutter aldri å kjøre fordi count aldri endres.

## For
Dette er en litt mer samlet utgave av en while løkke. Her er alt samlet i toppen av løkken. Dette sikker at vi unngår evige løkker.

```js
for(teller; boolskUttrykk; telleOpp) {
  //Kode vi ønsker å utføre
}
```

Hvis vi ønsker å printe tall fra 1 til 5 med en for gjør vi det på følgende måte
```js
for(var count = 0; count < 6; count++) {
  console.log(count);
}
```

Vi kan også skrive ut hvert enkel bokstav av en tekststreng på følgende måte
```js
var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}
```

## Array
Array er en måte å kunne samle data inn i en liste. Det er tungvindt å gjøre oppreasjoner på masse ting som ligger løst hver for seg. Derfor kan vi organsere dataene våres inn i en liste. 
```js
//Lagret som variabler
var venn1 = "Kari";
var venn2 = "Truls";
var venn3 = "Daniel";
var venn4 = "Marthe";

//Lagret i et array
var venner = ["Kari", "Truls", "Daniel", "Marthe"];
```

Arrayer lar deg grupere data sammen i en liste. Du kan fint hente ut enkelte elemeneter. 

### Indeks i array
Dette er noe som ofte er ganske forvirrende med hvordan array fungerer. Hvis tar `venner` arrayet som utgangspunkt så kan vi enkelt hente ut gjenstander og vi kan sjekke lengeden til arrayet. __MERK:__ lengde og indeks til gjenstand er to forskjellige tall. Arrayet over har 4 gjenstander i arrayet, men indexene teller fra null. Det vil da si at indeksene til arrayet går fra 0 til 3. Dette føles kanskje rart, men husk at en datamaskin teller fra 0.

### Bruke løkker til å gå igjennom array
Løkker brukes ofte når det kommer til å gå igjennom et array. De er perfekte for å enkelt gå igjennom vær gjenstand i et array. 

Eks med venner definert i forrige kodeblok. 
```js
venner.length //Dette vil skrive tallet 4

for (var teller = 0; teller < venner.length; teller++){
	console.log(venner[teller]);
}

```
Denne løkken går igjennom arrayet og printer ut hevrt navn som står i arrayet. Legg merke til at teller starter på null, så det er det samme som arrayet sin indeks, samtidig så fortsetter den bare så lenge teller er mindre enn `venner.length`. 

#### Hva ville skjedd dersom vi satte teller til å fortsette til den var lik  `venner.length`?
Dette er en klassisk feil å gjøre. Koden din vil da også kjøre en runde til da `teller = 4`. Da vil vi prøve å hente ut gjenstanden som er på indeks 4 i arrayet, og der finner vi ingen ting. Arrayet har som sagt 4 gjenstander, men deres indekser er bare fra 0 til 3. 

### Legge til nye ting i et array
Du kan fint legge til så mange gjenstander du vil (og av hvilken som helst type) inn i et array. Dette kan gjøres på et par forskjellige måter:
```js
//Legge til i et array

//Legge til med funksjon
venner.push("Thomas");
venner.length //Er nå 5

//Legge til eller endre verdi med indeks
venner[5] = "Hanne";
venner[1] = "Nina";

//Venner vil nå inneholde:
//["Kari", "Nina", "Daniel", "Marthe", "Thomas", "Hanne"]
//	0		 1		  2			3		  4			5

```


### Et par siste ting om array
```js
//Vi kan starte med et tomt array med å skrive følgende:
var familie = [];
var familie = new Array() //Utypisk måte å gjøre det på 

//Array kan innholde alle typer data
//Men ikke balnd sånn som jeg har gjort her da det vil føre til ekstremt mye hode bry for deg selv og andre senere. 
var random_collection = [49, true, "Hermione", null];

//Du kan finne array sin lengde med å skrive .length
var nums = [45,37,89,24];
nums.length   //4
```

### Tekst er et Array
Husker du at vi bruket `.length`på tekst? Det er fordi en tekst er egentlig et array av karakterer 🤯

Alt du kan gjøre med et array kan du også gjøre med tekst. 
```js
//Single or Double quotes OK
"Hei på deg"
'hello world'

//Concatenation
"Harald" + "Rex"  //"HaraldRex"

//Kan bruke .length på tekst
"Hei på deg".length  //10

//Få tilgang til enkelte tegn i en tekst streng med å skrive [] og indeksen på bokstaven du ønsker
"hei"[0]  //"h"
"hei"[2]  //"i"
"hei"[4]  //undefined
```

## Funksjoner
Funksjoner lar deg samle data og/eller funksjonalitet slik at man enkelt kan gjøre den samme opprasjonen flere ganger. En funksjoner gjør at du kan gjenta noe du gjør ofte i koden din slik at du ikke må repitere hav du skriver flere ganger. 

Det er veldig smart å skrive funksjoner sånn at hvis du først må gjøre en endring som skal skje flerer steder i koden din så er du 100% sikker på at den er endret alle stedene samtidig. 

Du definerer funksjoner ved å skrive på den følgende formen:
```js
function navnetDuØnskerPåFUnksjonen () {
	//Her inne bestemmer du hva funksjonen skal gjøre.
}
```

### Argumenter
For at funksjoner virkelig skal bli brukbare så må de ta inn noe informasjon. Den beste måten å tenke på en funksjoner er at alt som foregår inne i den foregår inne i et svart avlukke vekke fra resten av koden din. Hvis du da ønsker å sende den data så kan du gjøre det gjennom argumenter. Argumenter er verdier du definerer når du definerer funksjonen din, men de får ikke noen verdier før du kaller på funksjonen. 

```js
//Funksjon med arguemnt

function funksjonNavn(argument1){
	console.log(arguemnt1);
}

// Funksjon med flere argumenter 
function leggeSammen(argument1, argument2){
	console.log(arguemnt1 + argument2);
}

```

### Return
Ofte så ønsker vi at noe skal skje inne i denne svarte boksen, men at vi vil ha noe tilabke fra den. Da kommer nøkkel ordet `return` inn. Når man skriver return så stopper funksjonen din å kjøre og koden er tilbake til der den kalte på funksjonen. 

```js
//Denne funksjonen tar inn tekst og sørger for at den får stor forbokstav

function storForbokstav(tekst) {
  return tekst.charAt(0).toUpperCase() + tekst.slice(1);
}

var by = "paris";              				   //"paris"
var byMedStorBokstav = storForbokstav(city);  //"Paris"

//vi kan fange hva enn vi får tilabke fra en funksjon med en variabel
```


## Document Object Manipulation (DOM)
Dette er svært praktisk for mye, spesielt:
- Spill
- Animasjoner
- Dropdown menyer
- Form Validation

Dette er overgangen mellom HTML/CSS og JavaScriptet ditt. Nettleseren din gjør alle elementene dine om til JavaScript elementer. 

```js
var button = document.querySelector('button');
var list = document.getElementById('min-liste');

button.addEventListener('click', function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Ny gjenstand"));
    list.appendChild(li);
});
```

