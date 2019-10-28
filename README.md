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

Dette er overgangen mellom HTML/CSS og JavaScriptet ditt. Nettleseren din gjør alle elementene dine om til JavaScript elementer. På denne måten kan du endre så mye du vil både oppdatere innhold og styling. 

### Hente ut objekter fra HTML
Du kan hente ut HTML elementer ved å kalle på `document`. Dette referer til HTML dokumentet. Pass alltid på å koble JavaScriptet deres i bunnen av en HTML fil. Da sørger dere for at alle HTML elementer eksisterer før JavaScriptet fungerer. 

```js
var minVaribal = document.getElementById("element")
```

Over har vi satt en variabel i JavaScriptet vårt. Den kan kalles på når som helst i JavaScript koden vår. PASS PÅ: det som står inne i getElementByID må tilsvare en ID som eksisterer i HTML-en din. 

#### Måter å hente ut fra HTML
```js
document.getElementById() //Henter ut noe med en ID
document.getElementsByClassName() //Lager en liste med alle elementene som har en klasse i HTML-en din
document.querySelector() //Henter ut det første elemente det finner
//Hvis du ønsker å hente ut en klasse så skriv . foran navnet
//Øsnker du å hente ut noe med en ID så må du skrive # foran navnet

document.querySelectorAll() //Henter ut alle elementene av enten type eller navn. Den fungerer som querySelector, men den henter ut ALLE den finner. 
```


### innerHTML
Returnerer en tekst av hva enn som står mellom to \<tag\>\</tag\>. Så hvis dette er et tall så vil det automatisk allikevel bli gjort om til tekst. Men, dersom den inneholder indere HTML tagger så får man tilbake HTML i form av en tekst.

#### I HTML fil:
```html
<p>
  Dette er en <strong>kul</strong> paragraf 
</p>
```


#### I JavaScript:
```js
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"Dette er en <strong>kul</strong> paragraf"
```

Du kan alltid endre alle indre elementer ved å skrive:
```js
tag.innerHTML = "Noe nytt"
//Noe nytt
```


### textContent
Fungerer litt som innerHTML, men den fjerner alle indre \<tag\>\</tag\> elementer. 

#### I HTML fil:
```html
<p>
  Dette er en <strong>kul</strong> paragraf 
</p>
```


#### I JavaScript:
```js
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"Dette er en kul paragraf"
```


### ClassList
Dette er en liste med alle klassene som er på et element, du kan oppdatere og endre dette så mye du bare vil med følgende kode. 
```js
var tag = document.querySelector("h1");

//Legger til en klasse på h1 elementet
tag.classList.add("klasse-navn");

//Fjerner klassen
tag.classList.remove("klasse-navn");
```

### Style changes
Alle HTML elementer kan bli stil satt. Dette gjorde dere i faget kreativt web, der lærte dere å endre på hvordan ting ser ut ved hjelp at CSS. Dette er fremdeles hvordan vi gjør ting, men dere kan også endre elementer ved hjelp at JavaScript. Ved å hente ut et element så kan dere skrive .style. På den måten kan dere manipulere alle ting dere kan gjøre i CSS. Dette kan gjøres på følgende måte:
```js
var h1 = document.querySelector("h1");

h1.style.color = "pink";
```

Her henter jeg ut en h1 tag fra HTML-en også endrer jeg fargen dens til å bli rosa. 

```js
/SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

##### Endre attributter til HTML
Dette er mer komplisert, men du kan fint endre attributter slik som bilder og lenker dersom det er ønskelig. 

__HTML__
```js
<a href="www.google.com">Trykk på meg</a>
<img src="logo.png">
```

__JavaScript__
```js
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"

//Bytter ut lenka
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">Trykk på meg</a>

//Bytt ut bilde
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```


### Event Listener
Vi kan lytte etter eventer slik at funksjonene vår først skyter, dersom brukeren gjør noe på siden så aktiverer de koden vår. Det er mye mer brukervennlig enn å bare fyre av masse funksjoner i hytt og gevær. Det er en lang liste med eventer vi kan lytte etter. Vi kan da legge en event på HTML elemente vår ved å skrive:

#### Attributter I event listneren
Som våre egene funksjoner så trenger add eventlister to attributter. 
1. Den første er en tekststreng for hvilken event du ønsker at koden din skal lytte etter. 
2. Er funksjonen som skal kjøre dersom eventen forekommer. Pass på å ikke ha () etter funskjonskallet ditt. 

```js

function minFunskjoner() {
	//DEN GJØR ET ELLER ANNET
}

element.addEventListener('click', minFunskjoner); 


```

Som dere ser så har jeg lagt til navnet til funksjonen som eksisterer utenfor inne i `eventListener()`kallet. 

#### Typiske Eventer å lytte etter
Over gjør vi den mest typiske eventen å lytte etter. Den kjører da `minFunksjoner` hver gang noen trykker på hva enn som har fått denne event listneren. Dere kan lese alle type eventer her [https://www.w3schools.com/jsref/dom\_obj\_event.asp ](), men vit at de vanligste er de følgene:
- ‘click’ -\> Når et element blir trykket på
- 'change’ -\> Når verdien dens endrer seg
- ‘mouseover’ -\> Når musa er over elementet (samme som :hover i CSS)

Det er vanlig å sette klikk eventer på knapper, men dere kan fint sette det på alle elementer. 


## JQuery
Er et biblotek som gjør det litt lettere å bruke JavaScript. Får å kunne bruke JQuery må man legge til en tag i HTML-en sin, eller å laste ned filer. Jeg anbefaler det første. Alt du trenger da er en link til den nyeste versjonen av JQuery. Du kan alltid finne ut hva det er ved å gå inn på [https://jquery.com](). 

For å kunne bruke JQuery
```html
<!DOCTYPE html>
<html>
    <header>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    </header>
```

### Selector i JQuery
Du kan få tak i HTML objekter på litt liknende måte som man kan i vanlig JavaScript. Bare her så definerer man det med et $ i front i stede. Dette returnerer alltid et array med objekter, så selv om du bare har et element på siden din av en type så gir den deg tilbake en liste (array). Det gjør den uansett, selv om du bruker en id på elementet. 

Så måten man skriver det på ser litt annerledes ut. 
```js
$('h1'); //Hente ut alle med tag
$('#id'); //Henter ut alle med ID
$('.class'); //Henter ut alle med klassenavn
```

Du kan også være mer spesifikt dersom du ønsker å få ut et unikt objekt. La oss si du har en nettside med flere lenker, men du er kun interessert i å få tak i de som ligger inne i en liste. Du kan oppnå dette ved å skrive følgende kode. 
```js
$('li a');
```
Dette vil gi tilbake en liste med alle elementer som ligger inne i en liste (ul eller ol) og som er av typen a- tag. 

Hvis du ønsker å ta tak i objekter på en mer spesifikk måte så kan man gjøre følgende:
```js
$('div.navn') //Tar tak i alle div-er med klassenavnet navn
$('div:first-of-type') //Finner første av denne typen i dette tilfellet en div tag. 
```


### Manipulere CSS med Jquery
Du kan også bruke JQuery til å manipulere CSS. Alt du trenger da er `$(selector).css(proparty, value)`. Du må først si hvilket element du ønsker å endre på, etter det må du skrive i tekst hvilken CSS verdi du øsnker å endre også hvilken verdi den nå skal ha. La oss si du har en H1 som du ønsker å gjøre rød. Det kan du da skrive på følgende måte:
```js
$('h1').css('color', 'red');
```
Her ser du at jeg har valg alle h1 tagger, for så å endre propertyen color til nå å være fargen red. 

#### Hva om du ønsker å endre mange CSS elementer samtidig
Dette er enkelt å gjøre i JQuery. Alt du må gjøre er å lage et objekt med hva du ønsker å endre for så å putte det inn i CSS-en.
```js
var style = {
    'color': 'red',
    'background': 'black',
    'border': 'solid blue 5px',
    'text-align': 'center'
}


$('h1').css(style);
```
Legg merke til at vi her har laget en variabel med flere elementer inne i seg. Dette kalles en JAvaScript klasse. Jeg kommer ikke til å gi den mye mer tid i dette samlenotatet, men vit at en klasse kan ha nøkler og verdier. Disse er avskilt med : og når du har definert en nøkkel og en verdi så avslutter du setningen med ,. Siste linje skal ikke ha komma da det indikerer at de ikke er fler linjer etter. 

Det som er veldig bra med CSS i JQuery er at en enkel linje som den over, vil endre alle h1 elementene på siden din. Ingen vits å bruke forvirrende løkker. 

Du kan også skrive styling direkte inn i .css() kallet på følgende måte:
```js
$('h1').css({
    'color': 'red',
    'background': 'black',
    'border': 'solid blue 5px',
    'text-align': 'center'
});

```

##### Sammenlikne JQuery og JavaScript
La oss si at vi har følgende HTML 
```js
<body>
	<ol>
		<li>Kjøp melk</li>
		<li>Bak kake</li>
		<li>Spis kake</li>
	</ol>
</body> 
```

Og alt vi ønsker er å endre stylingen litt på disse liste gjenstand. Vi ønsker at de skal være blå tekst på sort bakgrunn.  Under har jeg skrevet JavaScript og JQuery måten å gjøre dette på :
```js
//JavaScript
var items = document.querySelectorAll('li');

for (var i = 0; i < items.length; i++){
	items[i].style.color = 'blue';
	items[i].style.background = 'black';
}

//JQuery
var style = {
	'color': 'blue',
	'background': 'black'
}
$('li').css(style);
```

Hva du foretrekker er opp til deg, men lesbarheten er åpenbart mye lettere i JQuery. 

### Typiske JQuery metoder

#### Text
Du kan få tak i all tekst til et element ved å kalle på .text(). Under har jeg lagt med et eksempel:
```js
<div class="hoved-konteiner">
  <div class="indre-konteiner">Hallo</div>
  <ul>
    <li>tekst gjenstand 1</li>
    <li>tekst <strong>gjenstand</strong> 2</li>
  </ul>
</div>
```

Hvis vi da skriver følgende JQuery:
```js
$( "div.hoved-konteiner" ).text()
```
Vil vi få teksten:
Hallo tekst gjenstand 1 tekst gjenstand 2

Den henter med andre ord ut all tekst som er innenfor en spesifikk tag. Den bryr seg ikke om andre tagger og vil da bare lage en lang tekst ut av resultatet. 

Den andre tingen vi kan gjøre med tekst er å sende inn en verdi. La oss si vi har følgende HTML:
```js
<ul>
	<li>Kjøp melk</li>
	<li>Bak kake</li>
	<li>Spis kake</li>
</ul>
```

Og nå vil vi heller at det bare skal stå hvilket nummer i lista de forskjellige elementene er. Vel, det kan løses på følgende måte:
```js
$( "ul li" ).text(function( teller ) {
  return "Gjenstand nummer: " + ( teller + 1 );
});
```
 
Slik som vi gjorde med `addEventListener()` tidligere i kurset så sender vi inn en anonym funksjon, denne gangen gir vi den et parameter og i dette tilfellet så er det plasseringen i lista. Som vi husker fra da vil lærte om arrays så har den første gjenstanden plass nummer null så for å vise fra 1 til tre så må vi ta teller og plusse på en. Dette vil resultere i følgende kode:

```js
<ul>
  <li>Gjenstand nummer: 1</li>
  <li>Gjenstand nummer: 2</li>
  <li>Gjenstand nummer: 3</li>
</ul>
```


#### HTML
Vi kan også få tak i indre html elementer på liknende måte som vi kan tekst. Alt vi trenger å gjøre er å skrive .html() på slutten av selectoren vår. 

La oss bruke UL-en fra forrige eksempel:
```js
<ul>
	<li>Kjøp melk</li>
	<li>Bak kake</li>
	<li>Spis kake</li>
</ul>
```

Hvis vi nå skriver følgende JQuery kode:
```js
$('ul').html();
```

Så vil vi få tilbake:
```js
" <li>Gjenstand nummer: 1</li> <li>Gjenstand nummer: 2</li> <li>Gjenstand nummer: 3</li> "
```

Hvis du da ønsker å sende inn ny HTML inn i en liste så er det helt mulig! La oss nå bytte ut innholdet med to nye elementer:
```js
$('ul').html("<li>Kanskje bake en kake til?</li> <li>Det hadde vært digg</li>");
```
 Dette vil resultere i følgende HTML:
```js
<ul>
	<li>Kanskje bake en kake til?</li>
	<li>Det hadde vært digg</li>
</ul>
```

Hvis du har flere lister på siden så vil alle nå bli oppdatert til dette. 

Dersom du ønsker å legge til disse elementene i stede for å gjerne de eksisterende så kan du gjøre det på følgende måte:
```js
$('ul').html($('ul').html() + "<li>Kanskje bake en kake til?</li> <li>Det hadde vært digg</li>");
```
Nå sier vi at vi ønsker at listen våre skal være lik det den var + de to nye vi har laget. Dette vil resultere i følgende HTML:
```js
<ul>
	<li>Kjøp melk</li>
	<li>Bak kake</li>
	<li>Spis kake</li>
	<li>Kanskje bake en kake til?</li>
	<li>Det hadde vært digg</li>
</ul>
```

#### Attr
Vi kan få tak i en attributt eller endre på en attributt. Jeg håper det nå begynner å bli tydelig at det er en rød tråd med alle disse metodene. De kan enten oppdatere eller hente noe for deg.

La oss si at vi har følgende bilde på siden vår:
```js
<img id="hoved-bilde" src="brudekjole.jpg">
```

 Vi kan nå endre på attributtene til dette bilde på følgende måte:
```js
$( "#hoved-bilde" ).attr( "alt", "Bilde av en brud i brudekjole" );
```
Nå har vi lagt på en alt tekst på bildet vårt. Vi kan også oppdatere den allerede eksisterende attributter `src` dersom vi finner ut at vi ønsker et annet bilde. 

```js
$( "#hoved-bilde" ).attr('src', 'smoking.jpg');
```

Slik som CSS før denne så kan vi legge til flere attributter med å lage et javascript objekt:
```js
var smoking = {
	alt: "Bilde av en smoking for menn",
	title: "photo av Kelly Clark",
	'src', 'smoking.jpg'
}


$( "#hoved-bilde" ).attr(smoking);
```

#### Val
Kan få tak i verdi for oss. Dersom vi ønsker å hente ut den spesifikke verdien så kan vi da bruke val(). La oss si vi har følgende HTML
```js
<input id='min-input'/>
```

Og noen skriver inn tekst der. Da hvis vi kjører denne JQuery koden etterpå.
```js
$('#min-input').val();
```

Så vil vi få tilbake hva enn de skrev inne det input heltet. 

Dersom vi ønsker å gjøre input feltet tomt igjen etter at noen er ferdig med å skrive noe, så kan vi oppdatere verden ved å legge inn vår egen tekst. 

```js
$('#min-input').val('');
```
Nå vil tekst feltet bli satt til å være tomt. 


