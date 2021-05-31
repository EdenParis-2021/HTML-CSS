var monid1 = document.getElementById('section1');

monid1.onclick = function()
{
    alert(monid1.innerHTML);
}

var mabalise = document.getElementsByTagName('span');

mabalise[0].onclick = function()
{
    alert(mabalise[0].innerHTML);
}

var myclass = document.getElementsByClassName('lesDiv');


    for(i = 0; i < myclass.length; i++)
    {
        myclass[i].onclick = function(){
            alert(this.innerHTML);
        }
    }


var p =  document.querySelector('p');

var lesP = document.querySelectorAll('p');

var article1 = document.querySelectorAll('.exo');

var r = 20;
var g = 204;
var b = 204;
var col = "rgb(" + r + "," + g + "," + b + ")";
var col2 = "rgb(" + g + "," + r + "," + b + ")";
var col3 = "rgb(" + b + "," + r + "," + g + ")";
for(j = 0; j < article1.length; j++){

    article1[j].onclick = function()
    {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        this.style.color = col;
        col = "rgb(" + r + "," + g + "," + b +")";
    }

}
var aside  = document.querySelector('aside');

aside.onclick = function()
{
    this.style.color = 'white';
    this.style.backgroundColor = 'rosyBrown';
    this.style.border = '2px dotted teal';
    this.style.padding = '30px';
    this.style.width = "60%";
    this.style.margin = '0 auto';
    this.style.textAlign = "center";
    this.innerText = 'SALUT MON POTE';

}
var borderS = ["dotted", "solid", "dashed"];
var i = Math.floor( Math.random() * 3);
var button = document.getElementById('button');
var body = document.getElementsByTagName("body");
button.onclick = function(){
    addContent();
    setInterval(function()
    {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        col = "rgb(" + r + "," + g + "," + b +")";
        col2 = "rgb(" + g + "," + r+20 + "," + b + ")";
        col3 = "rgb(" + b + "," + r + "," + g + ")";
        i = Math.floor( Math.random() * 3);
        body[0].style.backgroundColor = col;
        button.style.backgroundColor = col3;
        button.style.border = `${col2} ${borderS[i]} 3px`;
        console.log(i);
        button.value = col;
    }, 500)
}
function addContent(){
    var newLink = document.createElement('h1')
    var newContent = document.createTextNode('Titre de mon article');
    newLink.appendChild(newContent);
    var newa = document.createElement('a')
    newa.href="https://www.edenschool.fr/";
    var currentA = document.getElementsByTagName('h1')
    document.body.insertBefore(newa, currentA[0]);
    newa.appendChild(newLink)
    newLink.style.color = "red"
    newa.style.textDecoration = "none"
    newLink.style.margin = "0 auto"
    newLink.style.width = "30%"
    newLink.style.textAlign = "center"
}




