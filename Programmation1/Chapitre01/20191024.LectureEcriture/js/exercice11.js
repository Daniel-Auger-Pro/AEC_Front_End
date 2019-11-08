// Daniel Auger - 24 octobre 2019

// Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et d'un montant
// de profit du concessionnaire et des montants taxes de ventes. Les frais sont de 2% du prix de base et le
// pourcentage du concessionnaire est de 12% du prix de base. et le premier montant de taxe de vente est
// de 5% du sous-total du prix de base, des frais et du profit du concessionnaire et le deuxième montant
// de taxe est de 9,975% du prix de base, des frais et du profit du concessionnaire. Écrire l’algorithme
// qui lit le prix de base et qui imprime le montant de frais, le montant de commission, les deux montants
// de taxes et le prix de vente total, le tout sur des lignes différentes avec des messages explicites.

// Étape 1 : Trouver les variables.

var prixbase; var frais; var profit; var tps; var tvq; var total;

var pfrais = 0.02; var pprofit = 0.12; var ptps = 0.05; var ptvq = 0.09975;

//  Étape 2 : Lecture (demander à l'usager des données)

prixbase = Number(prompt("Entrez le prix de base du véhicule svp : "));

// Étape 3 : Les calcules

frais = prixbase * pfrais;
profit = prixbase * pprofit;
tps = ( prixbase + frais + profit ) * ptps;
tvq = (prixbase + frais + profit ) * ptvq;
total = prixbase + frais + profit + tps + tvq;
frais = frais.toFixed(2);
profit = profit.toFixed(2);
tps = tps.toFixed(2);
tvq = tvq.toFixed(2);
total = total.toFixed(2);

// Étape 4 : AFFICHE les résultats

console.log("Les frais sont de : " + frais);
console.log("La marge de profit est de : " + profit);
console.log("Le montant de la TPS est de : " + tps);
console.log("Le montant de la TVQ est de : " + tvq);
console.log("Le montant total de la voiture est de : " + total);
