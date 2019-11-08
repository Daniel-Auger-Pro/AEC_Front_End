// Daniel Auger - 24 octobre 2019

// Faites un programme qui lit le nom d’un article et son prix de détail.Votre programme doit
// afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.

// Étape 1 : Trouver les variables.

var nomarticle;
var prixdedetail;
var prixdegros;
var profit;

//  Étape 2 : Lecture (demander à l'usager des données)

nomarticle = prompt("Entrez le nom de l'article : ");
prixdedetail = Number(prompt("Veuillez entrer le prix de détail svp : "));

// Étape 3 : Le calcule

prixdegros = prixdedetail * 66 / 100;
prixdegros = prixdegros.toFixed(2);
profit = prixdedetail - prixdegros;
profit = profit.toFixed(2);

// Étape 4 : AFFICHE les résultats

console.log("Pour l'article " + nomarticle + " le prix de gros est de " + prixdegros +
    " et la marge de profit est de " + profit + " $.");
