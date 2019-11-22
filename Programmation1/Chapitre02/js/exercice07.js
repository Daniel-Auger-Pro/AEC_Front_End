// Daniel Auger - 14 novembre 2019

// Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran).

var nbr;

nbr = Number(prompt("Veuillez entrer un nombre svp :"));

if ( nbr > 0 ){
    document.write(" Le nombre : " + nbr + " est positif");
    }
    else if ( nbr < 0 ){
        document.write(" Le nombre : " + nbr + " est Négatif");
        }
        else {
            document.write(" Le nombre : " + nbr + " est Zéro");
            }