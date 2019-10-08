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

#### Evige løkekr
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
  //Kode vi øsnker å kjøre
}
```

Hvis vi ønsker å printe tall fra 1 til 5 med en for gjør vi det på følgende måte
```js
for(var count = 0; count < 6; count++) {
  console.log(count);
}
```


Vi kan også skrive ut hver enkel bokstav av en tekststreng på følgende måte
```js
var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}
```

