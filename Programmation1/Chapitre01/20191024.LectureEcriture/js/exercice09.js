// Daniel Auger - 24 octobre 2019

// Lire 2 nombres A et B au clavier. Donner à A la valeur de B, et à B la valeur de A en utilisant
// uniquement 3 variables A B C. Afficher A et B.

// Étape 1 : Trouver les variables.

var a;
var b;
var c;

//  Étape 2 : Lecture (demander à l'usager des données)

a = prompt("Entrez la valeur de A");
b = prompt("Entrez la valeur de B");

// Étape 3 : Les opérations
// Utilisez la variable C ICI pour que ça fonctionne  et modifiez une des deux lignes suivantes

c = a;
a = b;
b = c;

// Étape 4 : AFFICHE les résultats

alert("A vaut maintenant " + a);
alert("B vaut maintenant " + b);

//Est-ce que ça fonctionne? NON, Pourquoi pas? Tu perds une valeur car elle est effacé par l'autre.