// Daniel Auger - 14 novembre 2019

// Exercice 2 : Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats
// est plus grand que 200.00$. Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque
// acheteur a droit, connaissant le montant total des achats.

var achatTotal,achatMinimum,reduction;

achatMinimum = 200;

achatTotal = Number(prompt("Veuillez entrer le Total des Achats svp :"));

if(achatTotal >= achatMinimum){
    reduction = achatTotal * 15 / 100;
    document.write(" Le réduction que le client a droit est de : " + reduction);
}
    else {
        reduction = 0;
        document.write(" Le client n'as pas le droit à la réduction car le Total des Achats n'est pas supérieur ou" +
            " égal à : " + achatMinimum + " car il n'est que de : " + achatTotal);
}
