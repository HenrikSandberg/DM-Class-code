//INTRODUKSJON til DOM
var minKnapp = document.querySelector('button');
var kroppen = document.querySelector('body');
var harTyrkket = false;

minKnapp.addEventListener('click', function() {
    
    if (harTyrkket) {
        kroppen.style.backgroundColor = '#fff';
    } else {
        kroppen.style.backgroundColor = '#f3826e';
    }
    harTyrkket = !harTyrkket;
});