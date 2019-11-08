// Daniel Auger - 24 octobre 2019

// 13. Lire les quatre éléments d’information suivants :
// le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
// la note de l’examen de mi-session  (compte pour 30%)
// la note de l’examen de fin de session. (compte pour 50%)
// Toutes les notes lues sont sur 100.
// Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus,
// et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.

// Étape 1 : Trouver les variables.

var nometudiant; var notelaboratoires; var noteexamenmisession; var noteexamenfinal; var notetotal;

//  Étape 2 : Lecture (demander à l'usager des données)

nometudiant = prompt("Entrez le nom de l'étudiant svp : ");
notelaboratoires = Number(prompt("Entrez la note des laboratoires sur 100% svp : "));
noteexamenmisession = Number(prompt("Entrez la note de l'examen de mi-session sur 100% svp : "));
noteexamenfinal = Number(prompt("Entrez la note de l'examen final sur 100% svp : "));

// Étape 3 : Les calcules

notelaboratoires = notelaboratoires * 20 / 100;        // Calcule de la note sur 20%
noteexamenmisession = noteexamenmisession * 30 / 100;  // Calcule de la note sur 30%
noteexamenfinal = noteexamenfinal * 50 / 100;          // Calcule de la note sur 50%

notetotal = notelaboratoires + noteexamenmisession + noteexamenfinal; // Calcule de la note finale

// Étape 4 : AFFICHE les résultats

console.log("Le nom de l'étudiant est : " + nometudiant);
console.log("La note de laboratoire à une valeur qui compte sur 20% de la note final : " + notelaboratoires + "%");
console.log("La note de l'examen de mi-session à une valeur qui compte sur 30% de la note final : " + noteexamenmisession + "%");
console.log("La note de l'examen final à une valeur qui compte sur 50% de la note final : " + noteexamenfinal + "%");
console.log("Donc la note final pour " + nometudiant + " est de : " + notetotal + "%");