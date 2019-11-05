var artcileButton = document.querySelector('button');
var contentBtn = $('#content-button');
var liste = ['henrik', 'Hans', 'Hege'];

var root = $('#root');
root.css('background', 'red');

function createList() {
    var listDiv = `<ul>`;

    for (var i = 0; i < liste.length; i++) {
        listDiv = listDiv + `<li> ${liste[i]}</li>`;
    }
    listDiv = listDiv + '</ul>';
    return listDiv;
}

artcileButton.addEventListener('click', function () {
    root.html( 
        `<h1> Hello World</h1> 
        <p>Some text</p>
        <img src='../kanin.jpg'/> 
        ${createList()}`
    )
});

contentBtn.click(function() {
    root.html(`
    <p>Hello world</p>
    <button id='remove-button'>Fjern siste</button>
    `);

    $('#remove-button').click(function() {
        liste.shift(1);
        console.log(liste);
    })
});


