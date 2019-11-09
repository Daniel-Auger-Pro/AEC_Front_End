// Daniel Auger - 24 octobre 2019

// Fonction quadratique. L'usager entre A,B,C,X, vous trouvez Y. Rappel : Y = AX2 + BX + C

// Étape 1 : Trouver les variables.

// "Ce que j'avais fait! :" var a; var b; var c; var x; var y;
// Version de Shany

var a,b,c,x,y;

//  Étape 2 : Lecture (demander à l'usager des données)

a = Number(prompt("Entrez la valeur de A : "));
b = Number(prompt("Entrez la valeur de B : "));
c = Number(prompt("Entrez la valeur de C : "));
x = Number(prompt("Entrez la valeur de X : "));

// Étape 3 : Le calcule

// "Ce que j'avais fait! :" y = (a * (x * x)) + (b * x) + c;
// La version de Shany

y = a * Math.pow(x,2) + b*x + c;

// Étape 4 : AFFICHE les résultats
// Le document.write vient de Shany

console.log("La valeur de Y est : " + y +".");
// Ne Fonctionne pas "document.write("Voici la valeur de Y : " + y);"
alert("La valeur de Y est : " + y +".");