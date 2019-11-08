// Daniel Auger - 24 octobre 2019

// Fonction quadratique. L'usager entre A,B,C,X, vous trouvez Y. Rappel : Y = AX2 + BX + C

// Étape 1 : Trouver les variables.

var a; var b; var c; var x; var y;

//  Étape 2 : Lecture (demander à l'usager des données)

a = Number(prompt("Entrez la valeur de A : "));
b = Number(prompt("Entrez la valeur de B : "));
c = Number(prompt("Entrez la valeur de C : "));
x = Number(prompt("Entrez la valeur de X : "));

// Étape 3 : Le calcule

y = (a * (x * x)) + (b * x) + c;

// Étape 4 : AFFICHE les résultats

console.log("La valeur de Y est : " + y +".");
alert("La valeur de Y est : " + y +".");