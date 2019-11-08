// Daniel Auger - 24 octobre 2019

// Programmer un convertisseur Degré Celsius -> Fharenheit.

// Étape 1 : Trouver les variables.

var degrecelcius;
var degrefharenheit;

//  Étape 2 : Lecture (demander à l'usager des données)

degrecelcius = Number(prompt("Veuillez entrer une température en degré celcius svp : "));

// Étape 3 : Le calcule

degrefharenheit = degrecelcius * 9 / 5 + 32;
degrefharenheit = degrefharenheit.toFixed(1);

// Étape 4 : AFFICHE les résultats

console.log("La température en degré fharenheit pour " + degrecelcius + " degrés celcius est de "
    + degrefharenheit + " degrés fharenheit.");
