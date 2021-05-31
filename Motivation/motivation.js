var input = document.getElementById("name");
var button = document.getElementById('button');

var tableauMots = ["désir", "performance", "extrinsèque", "rêve", "capacité", "rétroaction", "bénéfice", "moteur", "enthousiasme", "dépassement de soi", "ambition", "réussir", "récompense", "chemin", "intention", "réussite", "objectifs", "but", "effort", "bénéfice" ,"confiance", "défi", "plaisir", "possible", "soutien", "entrainement", "dynamisme", "progrès", "courage", "investissement", "courage", "créativité", "challenge", "appui", "positive", "discipline", "avenir", "cerveau", "perséverance", "engagement", "agir", "efficacité", "pratique", "moteur", "coût", "bénéfice", "actions", "croire", "exigence", "dynamique", "talent", "stratégie" ,"dopamine", "erreur", "satisfaction"]




function inputing(param)
{
    alert(param);
}

button.onclick = function()
{
    inputing(input.value)
}
