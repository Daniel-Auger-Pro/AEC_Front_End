// Daniel Auger - 24 octobre 2019

// Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date,
// le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés. Le montant de TPS
// est de 5% et la TVQ est de 9.975%. Vous affichez la date, les 2 montants de taxes et le grand total.

// Étape 1 : Trouver les variables.

var date; var article1; var article2; var article3; var tps; var tvq; var total;

//  Étape 2 : Lecture (demander à l'usager des données)

date = prompt("Entrez la date du jour svp, format YYYY/mm/dd : ");
article1 = Number(prompt("Entrez le prix du premier article svp : "));
article2 = Number(prompt("Entrez le prix du deuxième article svp : "));
article3 = Number(prompt("Entrez le prix du troisième article svp : "));

// Étape 3 : Les calcules

tps = ( article1 + article2 + article3 )  * 0.05;
tvq = ( article1 + article2 + article3 ) * 0.09975;
total = article1 + article2 + article3 + tps + tvq;
total = total.toFixed(2);
tps = tps.toFixed(2);
tvq = tvq.toFixed(2);

// Étape 4 : AFFICHE les résultats

console.log("La date du jour est : " + date);
console.log("Le montant de la TPS est : " + tps);
console.log("Le montant de la TVQ est de : " + tvq);
console.log("Le total de la facture est de : " + total);