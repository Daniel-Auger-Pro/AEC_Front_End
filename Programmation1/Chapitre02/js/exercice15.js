// Daniel Auger - 23 novembre 2019

// Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var largeur,hauteur,perimetre,surface;

largeur = Number(prompt("Entrez la largeur du rectangle SVP : "));
hauteur = Number(prompt("Entrez la hauteur du rectangle SVP : "));

if(largeur > 0 && hauteur > 0){
    perimetre = (largeur + hauteur) * 2;
    if(perimetre >= 100){
        surface = largeur * hauteur;
        document.write("La surface du rectangle dont le périmètre est de : " + perimetre + " mètres est de : "
            + surface + " m².");
    }
    else{
        document.write("Alerte :  Le périmètre est inférieur à 100m.");
    }
}
else{
    document.write("Alerte : Soit la largeur ou la hauteur sont inférieurs ou égales à zéro, calcule impossible.")
}