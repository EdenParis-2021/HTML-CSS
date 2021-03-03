/*
var age = prompt ("votre age ?");
if(age = " "){
    alert("vous n'avez pas répondu.");
}else if (age <= 16){
    alert("bienvenue");
}else if (age > 16){
    window.location.href = "https://www.edenschool.fr/";
}

*/


var jour = prompt(' choisis un jour de la semaine ?');

switch(jour){
    case 'lundi':
        document.write('tu as choisis lundi');
        break;
    case 'mardi':
        document.write('tu as choisis mardi');
        break;
    case 'mercredi':
        document.write('tu as choisis mercredi');
        break;
    case 'jeudi':
        document.write('tu as choisis jeudi');
        break;
    case 'vendredi':
        document.write('tu as choisis vendredi');
        break;
    case 'samedis':
        document.write('tu as choisis samedis');
        break;
    case 'dimanche':
        document.write('tu as choisis dimanche');
        break;

    default: // else
        alert('tu n\'as pas choisis un jour de la semaine');
}



document.write('<hr>');
document.write('<select>');
for (var a = 1900; a <2021 ; a++){
document.write('<option> a </option>>');
}
document.write('</select>');
document.write('<hr>');

exo1
var nom = prompt ('votre nom ?')
var prenom = prompt ('votre prenom ?')
alert ("bonjour, " + prenom + " " + nom)

exo2


var a = 2;
    a = a - 1;
    a++;
var b = 8;
    b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;

exo3
var a = 1.20;
var b = prompt ("prix HT");
var c = a * b;
document.write("Résultat <br> Le prix est de" + " " + c );

exo4
var a = prompt ('température en degrés celsius')
var b = a * 9 / 5 + 32
document.write('Résultat <br> 1 Celsuis vaut 33.8 Farhenheit. <br>' + a + 'Celsuis vaut' + b + 'Farhenheit. <br>  1 Farhenheit vaut 33.8 Celsuis.' + b + 'Farhenheit vaut' + a + 'Celsuis.')

exo5


nombre1 = 5
nombre2 = 3
temp = nombre1
nombre1 = nombre2
nombre2 = temp


exo6

var jour = prompt(' choisis un jour de la semaine ?');

switch(jour){
    case 'lundi':
        document.write('tu as choisis lundi');
        break;
    case 'mardi':
        document.write('tu as choisis mardi');
        break;
    case 'mercredi':
        document.write('tu as choisis mercredi');
        break;
    case 'jeudi':
        document.write('tu as choisis jeudi');
        break;
    case 'vendredi':
        document.write('tu as choisis vendredi');
        break;
    case 'samedis':
        document.write('tu as choisis samedis');
        break;
    case 'dimanche':
        document.write('tu as choisis dimanche');
        break;

    default: // else
        alert('tu n\'as pas choisis un jour de la semaine');
}


exo7

var a = prompt('choisis un nombre');
var b = prompt ('choisis un deuxieme nombre');
if(a < b){
    alert('premier nombre :' + a + ' ' + 'est plus petit que 2nd :' + ' ' + b)
}
else if(a == b){
    alert('premier nombre :' + a + ' ' + 'est egal au 2nd :' + ' ' + b)
}
if(a + b == ''){
    alert('vous n\'avez pas repondu');
}
else {
    alert('premier nombre :' + b + ' ' + 'est plus petit que 2nd :' + ' ' + a)
}
exo8
var a = prompt('choisis un nombre');
var b = prompt ('choisis un deuxieme nombre');
if(a < b){
    alert('premier nombre :' + a + ' ' + 'est plus petit que 2nd :' + ' ' + b)
}
else if(a == b){
    alert('premier nombre :' + a + ' ' + 'est egal au 2nd :' + ' ' + b)
}
if(a + b == ''){
    alert('vous n\'avez pas repondu');
}
else {
    alert('premier nombre :' + b + ' ' + 'est plus petit que 2nd :' + ' ' + a)
}




----------------------------
var tab1 = ['S', 'M', 'L', 'XL'];

for(var i = 0; i < tab1.length ; i++){
    document.write('<h3>A l\'indice ' + i + ' il y a ' + tab1[i] + '</h3>');
}
var sizes = ['S', 'M', 'L', 'XL'];
// afficher les tailles disponibles dans un select






var tab1 = ['S', 'M', 'L', 'XL'];


document.write('<select>');
document.write('<option>' + tab1[0] + '</option>');
document.write('<option>' + tab1[1] + '</option>');
document.write('<option>' + tab1[2] + '</option>');
document.write('<option>' + tab1[3] + '</option>');
document.write('</select>')

document.write('<select>');
for (var i = 0; i < sizes.length ; i++){
    document.write('<option>' + sizes[i] + '<option>');
}
document.write('</select>');
-----------------------------------

/**
 * EXO
 *
 * Exercises

 1- Créer un tableau (array) de vos plats préférés (favFoods). Il doit avoir au moins 3 éléments.
 2- Afficher le 2nd élément de favFoods.
 2bis- Changer le dernier élément de favFoods pour un autre de vos mets favoris.
 3- Retirer le 1er élément de favFoods et stocker le dans une variable ancienFavFoods.
 Afficher le tableau favFoods et la variable ancienFavFoods.
 4- Ajouter un autre élément à favFoods en fin de tableau. Afficher le tableau.
 5- Ajouter un autre élément à favFoods en début de tableau. Afficher le tableau.
 6- Créer un tableau vide et utiliser dessus la méthode pop(). Que se passe-t-il ?
 7- Dans les exemples ci-dessous utiliser splice() pour convertir le 1er tableau et obtenir le 2nd tableau fournit :
 [2, 3, 4, 5] -> [2, 4, 5]
 ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
 [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */



var tab1 = ['1', '2', '3', '4','5','6', '7', '8','9','10'];

document.write('<select>');
for (var i = 0; i < tab1.length ; i++){
    document.write('<option>' + tab1[i] + '<option>');
}
document.write('</select>');



document.write('<table cellpadding="15" border="1">');
document.write('<tr>');
for(let i = 0; i <= 9; i++){
    document.write('<td style="font-size: 20px">' + i + '</td>')
}
document.write('</tr>');
document.write('</table>');

    document.write('<table border="1" style="border-collapse:collapse; color:black;">' )
    document.write('<tr>')
for (var i = 0; i <= 9; i++){
    if (i % 2 === 0){
        document.write('<td style="background-color: yellow; padding: 10px;">' + i + '</td>');
    } else {
    document.write('<td style="background-color: deepskyblue; padding: 10px;">' + i + '</td>');
    }
}
    document.write('</tr>');
    document.write('</table>');