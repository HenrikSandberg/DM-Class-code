var teller = document.querySelector('p');
var buttons = document.querySelectorAll('button');
var count = 0;




for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        
        if (this.innerHTML === '+') {
            count = count + 1;
        } 
    
        if (this.innerHTML === '-') {
            if (count > 0 ) { //BONUS
                count = count - 1 ;
            }
        }
    
        teller.innerHTML = count;
    });
}

