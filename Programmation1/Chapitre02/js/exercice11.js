// Daniel Auger - 14 novembre 2019

// Lire une lettre au clavier.
//     Si la lettre est 'w', écrire Avancer.
//     Si la lettre est 'a', écrire Gauche.
//     Ajouter 's' et 'd'.
//     Si c'est autre chose, écrire un message d'erreur.

var lettre;

lettre = prompt("Entrer une lettre SVP :");

if (lettre === "w"){
    document.write("Avancer");
}
else if (lettre === "a"){
    document.write("Gauche");
}
else if (lettre === "s"){
    document.write("Stop ou reculer");
}
else if (lettre === "d"){
    document.write("Droite");
}
else {
    document.write("Vous n'avez pas presser une des touches w - a - s - d");
}