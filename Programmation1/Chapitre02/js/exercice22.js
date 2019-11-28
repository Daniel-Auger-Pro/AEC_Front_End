// Daniel Auger - 23 novembre 2019

// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur.

var couleurTexte,couleurFond,couleurTexteNbr,couleurFondNbr;

couleurTexteNbr = Number(prompt("Entrez la couleur du texte que vous voulez avoir, 1=Noir 2=Blanc 3=Jaune : "));
couleurFondNbr = Number(prompt("Entrez la couleur du fond que vous voulez avoir, 1=Bleu 2=Rouge 3=Vert : "));

if(couleurTexteNbr === 1 || couleurTexteNbr === 2 || couleurTexteNbr === 3){
    if(couleurTexteNbr === 1){
        couleurTexte = "black";
    }
    else if(couleurTexteNbr === 2){
        couleurTexte = "White";
    }
    else if(couleurTexteNbr === 3){
        couleurTexte = "Yellow";
    }
    if(couleurFondNbr === 1 || couleurFondNbr === 2 || couleurFondNbr === 3){
        if(couleurFondNbr === 1){
            couleurFond = "Blue";
        }
        else if(couleurFondNbr === 2){
            couleurFond = "Red";
        }
        else if(couleurFondNbr === 3){
            couleurFond = "Green";
        }
    }
    console.log("<h1>")
    else{
        document.write("Vous n'avez pas presser les bonnes touches !")
    }
}
else{
    document.write("Vous n'avez pas presser les bonnes touches !")
}
