// Daniel Auger - 23 novembre 2019

// Lire 2 nombres au clavier. Si ces 2 nombres sont : supérieurs ou égaux à 10, affichez leur somme, inférieurs à 10,
// affichez leur produit. Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez
// la différence entre les deux nombres.

var nbr1,nbr2,somme,produit,difference;

nbr1 = Number(prompt("Entrez le premier chiffre SVP : "));
nbr2 = Number(prompt("Entrez le deuxième chiffre SVP : "));

if(nbr1 >= 10){
    if(nbr2 >= 10){
        document.write("La somme des deux nombres est de : " + (nbr1 + nbr2) + ".");
    }
    else{
        document.write("La différence entre les deux nombres est de : " + (nbr1 - nbr2) + ".");
    }
}
else if(nbr2 >= 10){
    document.write("La différence entre les deux nombres est de : " + (nbr2 - nbr1) + ".");
}
else{
    document.write("Le produit des deux nombres est de : " + (nbr1 * nbr2) + ".");
}