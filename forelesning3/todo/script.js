var knapp = document.querySelector('button');
var liste = document.querySelector('#min-liste');
var tekstFelt = document.getElementById('tekst-felt');

function leggTilIListe(tekst){
    //Putt inn i liste
    var listeElement = document.createElement('li');
    var listeTekst = document.createTextNode(tekst);
    listeElement.appendChild(listeTekst);
    liste.appendChild(listeElement);
} 



knapp.addEventListener('click', function() {
    //Hente tekst fra tekst felt
    var tekstFraTekstFelt = tekstFelt.value;
    
    if (tekstFraTekstFelt !== null && tekstFraTekstFelt.length > 0) {
        leggTilIListe(tekstFraTekstFelt);
    }
    
    tekstFelt.value = null;
});