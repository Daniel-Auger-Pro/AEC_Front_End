// Daniel Auger - 14 novembre 2019

// Exercise 1 : Lire deux nombres et afficher le plus grand des deux.

var nbr1,nbr2;

nbr1 = Number(prompt("Veuillez entrer le nombre 1 svp :"));
nbr2 = Number(prompt("Veuillez entrer le nombre 2 svp :"));

if (nbr1 > nbr2){
    document.write(" Le nombre 1 est le plus grand : " + nbr1);
    console.log(" Le nombre 1 est le plus grand : " + nbr1);
}
    else if (nbr1 < nbr2){
        document.write(" Le nombre 2 est le plus grand : " + nbr2);
        console.log(" Le nombre 2 est le plus grand : " + nbr2);
    }
        else {
            document.write(" Les deux nombres sont égaux : " + nbr1 + " et " + nbr2);
            console.log(" Les deux nombres sont égaux : " + nbr1 + " et " + nbr2);
        }