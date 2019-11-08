// Daniel Auger - 24 octobre 2019

// Convertir un nombre de gallons en litres. 1 gal = 4.55 litres

// Étape 1 : Trouver les variables.

var gallons;
var litres;

// Étape 2 : Lecture (demander à l'usager des données)

gallons = Number(prompt("Veuillez entrer un nombre de gallons svp :"));

// Étape 3 : Le calcule

litres = (gallons * 4.55);

// Étape 4 : AFFICHE les résultats

console.log("Le nombre de litre pour " + gallons + " gallons est de : " + litres + " litres.");