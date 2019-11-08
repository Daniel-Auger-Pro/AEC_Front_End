// Daniel Auger - 24 octobre 2019

// Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif).
// Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

// Étape 1 : Trouver les variables.

var nom;
var age;
var nombrejour;

//  Étape 2 : Lecture (demander à l'usager des données)

nom = prompt("Entrez votre nom : ");
age = Number(prompt("Veuillez entrer votre âge svp : "));

// Étape 3 : Le calcule

nombrejour = age * 365.25;

// Étape 4 : AFFICHE les résultats

console.log("Votre nom est " + nom + " et vous avez vécu environ " + nombrejour + " jours.");