var knapper = document.querySelectorAll('button');
var tekst = document.querySelector('h1');
var teller = 0;


for (var i = 0; i < knapper.length; i++) {
    knapper[i].addEventListener('click', function() {
        
        if (this.innerHTML === '+') {
            teller = teller + 1;
        }
        
        if (this.innerHTML === '-') {
            teller = teller - 1;
        }
        tekst.innerHTML = teller;
    });
}