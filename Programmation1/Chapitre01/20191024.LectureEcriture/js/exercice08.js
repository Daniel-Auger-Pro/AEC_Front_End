// Daniel Auger - 24 octobre 2019

// Programmer un convertisseur Fharenheit -> Degré Celsius.

// Étape 1 : Trouver les variables.

var degrecelcius;
var degrefharenheit;

//  Étape 2 : Lecture (demander à l'usager des données)

degrefharenheit = Number(prompt("Veuillez entrer une température en degré fharenheit svp : "));

// Étape 3 : Le calcule

degrecelcius = (degrefharenheit - 32) * 5 / 9;
degrecelcius = degrecelcius.toFixed(1);

// Étape 4 : AFFICHE les résultats

console.log("La température en degré celcius pour " + degrefharenheit +
    " degrés fharenheit est de " + degrecelcius + " degrés celcius.");
