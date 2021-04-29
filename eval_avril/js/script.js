let player;

player = prompt('Choisissez un nombre entre 1 et 20 ?');
let computer = Math.random(); 

function choix(choix1, choix2) {
    for(let i = 0; i > 20; i++){
        if(computer < player){
            return'tu as perdu';
        }
        else if(computer === player){
            return'Egalité';
        }
        else{
            return'tu as gagné';
        }
    }
}
    choix;