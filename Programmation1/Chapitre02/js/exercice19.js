// Daniel Auger - 23 novembre 2019

// Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de
// 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var momtant,escompte;

montant = Number(prompt("Entrezu montant SVP : "));

if(montant >= 500){
    escompte = montant * 0.12;
    escompte = escompte.toFixed(2);
    document.write("<h1>L'escompte sur le montant accordé est de : $" + escompte + ".</h>")
}
else{
    document.write("<h1>Vous n'avez pas droit à l'escompte !</h1>")
}