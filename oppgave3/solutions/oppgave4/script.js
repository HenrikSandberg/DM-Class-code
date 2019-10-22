var pris = document.getElementById('pris-for-mat');
var tips = document.getElementById('tips-prosent');
var resultat = document.getElementById('resultat');
var knapp = document.querySelector('button');


knapp.addEventListener('click', function(){
    var tempPris = Number(pris.value);
    console.log(typeof tempPris);
    if (tempPris !== null) {
        var tempTips = Number(tips.value);

        if (tempTips !== null) {
            var endeligPris = tempPris + (tempPris*tempTips/100);
            resultat.innerHTML = endeligPris + ',-';
        } else {
            resultat.innerHTML = "NO TIPS";
        }

    } else {
        resultat.innerHTML = "NO PRICE"; 
    }
});