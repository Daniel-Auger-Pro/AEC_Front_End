// Daniel Auger - 23 novembre 2019

// Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne
// (pour les autres) selon la lettre lue. Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules
// ou en majuscules.

var lettre;

lettre = prompt("Entrez une lettre SVP : ");
lettre = lettre.toLocaleUpperCase();

if(lettre === "A" || lettre === "E" || lettre ==="I" || lettre === "O" || lettre === "U" || lettre === "Y"){
    document.write("Votre lettre est une voyelle !")
}
else if(lettre === "B" || lettre === "C" || lettre === "D" || lettre === "F" || lettre === "G" || lettre === "H" ||
    lettre === "J" || lettre === "K" || lettre === "L" || lettre === "M" || lettre === "N" || lettre === "P" ||
    lettre === "Q" || lettre === "R" || lettre === "S" || lettre === "T" || lettre === "V" || lettre === "W" ||
    lettre === "X" || lettre === "Z"){
    document.write("Votre lettre est une consonne !");
}
else{
    document.write("Le caractère demandé n'est pas une lettre !");
}