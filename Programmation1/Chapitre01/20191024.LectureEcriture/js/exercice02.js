// Daniel Auger - 24 octobre 2019

//Lire un nombre et afficher la carré et le cube de ce nombre.
// code pour classroom puwihg

//  Étape 1 : trouver les variables
var nombre;
var carre;
var cube;

//  Étape 2 : Lecture (demander à l'usager des données)
nombre = Number(prompt("Veuillez entrer un nombre svp :"));

//  Étape 3 : Les calcules
carre = nombre * nombre;
cube = nombre * nombre * nombre;

//  Étape 4 : AFFICHE les résultats

console.log("Le nom est : " + nombre);
console.log("Le carré du nombre est : " + carre);
console.log("Le cube du nombre est : " + cube);