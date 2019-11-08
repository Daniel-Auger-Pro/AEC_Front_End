// Daniel Auger - 24 octobre 2019

// Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%. Cette note est dérivée
// des trois notes suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale,
// note de l’examen de fin session qui compte pour 50% et la note de laboratoire qui compte pour 20%.
// ex :
// Lire la note de l’examen de mi-session / 30  → 15/30
// Lire la note de l’examen final / 50 → 40/50
// Lire la note des laboratoires / 20 → 18/20
// La note finale est de 73%

// Étape 1 : Trouver les variables.

var noteexamenmisession; var noteexamenfinal; var notelaboratoire; var notefinal;

//  Étape 2 : Lecture (demander à l'usager des données)

noteexamenmisession = Number(prompt("Entrez la note de l'examen de mi-session sur 30% svp : "));
noteexamenfinal = Number(prompt("Entrez la note de l'examen final sur 50% svp : "));
notelaboratoire = Number(prompt("Entrez la note des laboratoires sur 30% svp : "));

// Étape 3 : Les calcules

notefinal = noteexamenmisession + noteexamenfinal + notelaboratoire;

// Étape 4 : AFFICHE les résultats

console.log("La note final est de : " + notefinal + "%");