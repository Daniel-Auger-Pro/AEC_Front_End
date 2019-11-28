// Daniel Auger - 23 novembre 2019

// Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var nbr1,nbr2;

nbr1 = Number(prompt("Entrez un nombre SVP : "));
nbr2 = Number(prompt("Entrez un deuxième nombre différent du premier nombre SVP : "));

if(nbr1 != nbr2){
    if(nbr1 > nbr2){
        document.write("Le premier chiffre : " + nbr1 + " est plus grand que le deuxième chiffre : " + nbr2 + ".");
    }
    else{
        document.write("Le premier chiffre : " + nbr1 + " est plus petit que le deuxième chiffre : " + nbr2 + ".");
    }
}
else{
    document.write("Erreur les deux nombres sont égaux : " + nbr1 + " et : " + nbr2 + ".")
}