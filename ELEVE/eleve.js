let carre = document.querySelector('.rose');
let posCarreX = 0;
let posCarreY = 0

var r = 20;
var g = 204;
var b = 204;
var col = "rgb(" + r + "," + g + "," + b + ")";


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowDown":
            posCarreY += 40;
            carre.style.top = posCarreY + 'px';
            carre.style.color = couleur();
            break;
        case "ArrowUp":
            posCarreY -= 40;
            carre.style.top = posCarreY + 'px';
            carre.style.color = couleur();
            break;
        case "ArrowLeft":
            posCarreX -= 40;
            carre.style.left = posCarreX + 'px';
            carre.style.color = couleur();
            break;
        case "ArrowRight":
            posCarreX += 40;
            carre.style.left = posCarreX + 'px';
            carre.style.color = couleur();
            break;
        default:
            return;
    }

    event.preventDefault();
}, true);

function couleur()
{
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    col = "rgb(" + r + "," + g + "," + b +")";
    carre.style.backgroundColor = col;

}
