// Daniel Auger - 14 novembre 2019

// Exercise 4 : Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement, si le deuxième
// nombre est différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par
// zéro interdite.’, si ce nombre n’est pas zéro vous devez imprimer le résultat.

var nbr1,nbr2,zero,resultat;

zero = 0;

nbr1 = Number(prompt("Veuillez entrer le nombre 1 svp :"));
nbr2 = Number(prompt("Veuillez entrer le nombre 2 svp :"));

if(nbr2 != zero){
    resultat = nbr1 / nbr2;
    document.write(" " + nbr1 + " diviser par " + nbr2 + " est égal à : " + resultat);
}
    else{
        document.write(" Division par zéro interdite.");
}