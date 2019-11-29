/*
Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
150 points de dommages si l’adversaire a entre 60 et 79 hp.
200 points de dommages si l’adversaire a entre 80 et 99 hp.
250 points si l’adversaire a 100 hp et plus.
Écrire un algorithme le code qui permet de :
Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.
*/

var adversaire,mBGX;

adversaire = Number(prompt("Entrez le niveau de l'adversaire SVP : "));

if(adversaire > 0 && adversaire <= 60){
    mBGX = 100;
}
else if(adversaire > 60 && adversaire <= 79){
    mBGX = 150;
}
else if(adversaire >=80 && adversaire <= 99){
    mBGX = 200;
}
else if(adversaire >= 100){
    mBGX = 250;
}
else{
    document.write("Il est déjà mort !");
}

document.write("Le dommage est égal à : " + mBGX + ".");