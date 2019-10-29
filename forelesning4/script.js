//var h1 = document.querySelector('h1');
//var h1 = $('h1:first-of-type');

var unik = $('#unik-h1');

var mineH1Tagger = {
    color: 'red',
    background: 'black',
    'text-align': 'center'
}

unik.css(mineH1Tagger);

$('li').css('color', 'blue');

var tekst = $('ul').text()

$('#første-li').text('<li>Noe nytt</li>');


var ul  = $('ul');


ul.html(ul.html() +'<li>Hallo verden</li>')

var bilde = $('img')

bilde.css('height', '100px');
bilde.attr('alt', 'img av kanin');
bilde.attr('src', 'newIMG.jpg');

/*
var li = document.querySelectorAll('li');

for (var i = 0; i < li.length; i++){
    li.style.color = 'red';
}
*/

