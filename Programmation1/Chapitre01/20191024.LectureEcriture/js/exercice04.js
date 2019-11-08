// Daniel Auger - 24 octobre 2019

// Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant
// le taux horaire et le nombre d’heures travaillées sont fournies en entrée.

// Étape 1 : Trouver les variables.

var nomemploye;
var tauxhoraire;
var nombredheuretravailler;
var salairetotal;

//  Étape 2 : Lecture (demander à l'usager des données)

nomemploye = prompt("Entrez le nom de l'employé : ");
tauxhoraire = Number(prompt("Veuillez entrer le taux horaire de cet employé svp: "));
nombredheuretravailler = Number(prompt("Veuillez entrer le nombre d'heure que cet employé à tavailler svp: "));

// Étape 3 : Le calcule

salairetotal = tauxhoraire * nombredheuretravailler;

// Étape 4 : AFFICHE les résultats

console.log("Le salaire pour " + nomemploye + " ayant travailler " + nombredheuretravailler +
    " heures, au taux de " + tauxhoraire + " $ par heure est de : " + salairetotal + " $.");

