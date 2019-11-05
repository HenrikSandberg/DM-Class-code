var root = $('#root');

var liste = [
    {
        title:'Dette er en tittel',
        body:'Her står det noe tekst'
    },
    {
        title:'Dette er en annen tittel',
        body:'Her står noe annet enn i den første'
    },
    {
        title:'Dette er en tredje gjenstand',
        body:'Som inneholder noe tekst'
    }
];

function createBtnCode(){
    var buttons = document.querySelectorAll('.go-to-article');
    
    for (var teller = 0; teller < buttons.length; teller++) {
        buttons[teller].value = teller;
        buttons[teller].addEventListener('click', function () {
            var buttonValue = this.value;
    
            var nyHTML = `
                <div>
                    <h1 class='article-title'> ${liste[buttonValue].title}</h1>
                    <p> ${liste[buttonValue].body}</p>
                    <button class='delete'>Slett</button>
                    <input class='ny-tittel'/>
                </div>`;
            root.html(nyHTML);
    
            $('.delete').click(function() {
                liste.splice(buttonValue, 1);
                createList();
            })

            $('.ny-tittel').keypress(function(event) {
                if ( event.which == 13 ) {
                    event.preventDefault();

                    liste[buttonValue].title = this.value;

                    var nyHTML = `
                        <div>
                            <h1 class='article-title'> ${liste[buttonValue].title}</h1>
                            <p> ${liste[buttonValue].body}</p>
                            <button class='delete'>Slett</button>
                            <input class='ny-tittel'/>
                        </div>`;
                    root.html(nyHTML);
                 }

            })
    
        });
    }
}

function createList() {
    var listDiv = "<ul>";

    for (var i = 0; i < liste.length; i++) {
        listDiv = listDiv + `
        <li> 
            ${liste[i].title}
            <button class='go-to-article'> Trykk </button>
        </li>`;
    }
    
    listDiv = listDiv + '</ul>';
    root.html(listDiv);
    createBtnCode();
}



createList();



