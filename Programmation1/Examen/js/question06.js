// Daniel Auger
/*
Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.

L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.

RasPiBot aimerait que votre programme affiche

un résumé de l’achat
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix
le prix avec la livraison de 15%.
*/

var controleur,moteur,camera,matriceLed,prix,livraison,phras,prixTotal;

controleur = prompt("Entrez le type de controleur 1 = Pi et 2 = Pi Zero : ");
moteur = Number(prompt("Entrez la quantité de moteur entre 2 et 24 : "));
camera = prompt("Voulez-vous une caméra ? oui ou non : ");
matriceLed = prompt("Voulez-vous une matrice de LEDS pour les yeux ? oui ou non : ");

prix = 0;
if(controleur === "1" || controleur === "2"){
    if(controleur === "1"){
        prix = prix + 55;
        phrase = "Vous avez choisi le model Pi, ";
    }
    else{
        prix = prix + 15;
        phrase = "Vous avez choisi le model Pi Zero, "
    }
    if(moteur >= 2 && moteur <=24) {
        prix = prix + (moteur * 5);
        phrase = phrase + "avec " + moteur + " moteurs, ";
        camera = camera.toLocaleUpperCase();
        if(camera === "OUI" || camera === "NON"){
            if(camera === "OUI"){
                prix = prix + 35;
                phrase = phrase + "avec une caméra, ";
            }
            else{
                phrase = phrase + "pas de caméra, ";
            }
            matriceLed = matriceLed.toLocaleUpperCase();
            if(matriceLed === "OUI" || matriceLed === "NON"){
                if(matriceLed === "OUI"){
                    prix = prix + 10;
                    phrase = phrase + "une matrice de LEDS pour les yeux, "
                }
                else{
                    phrase = phrase + "pas de matrice de LEDS pour les yeux, "
                }
                livraison = prix * 0.15;
                livraison = livraison.toFixed(2);
                prixTotal = Number(prix + livraison);
                document.write(phrase + " le filament 3D, une batterie USB"+"</br>");
                document.write("Le prix total du robot est de $" + prix + "</br>");
                document.write("La livraison de 15% est de $" + livraison + "</br>");
                document.write("Le total est de $" + prixTotal);
            }
            else{
                document.write("Vous n'avez pas fait le bon choix pour la matrice de LEDS pour les yeux.")
            }
        }
        else{
            document.write("Vous n'avez pas entré le bon choix de caméra.")
        }
    }
    else{
        document.write("Vous n'avez pas entré la bonne quantité de moteur.")
    }
}
else{
    document.write("Vous n'avez pas sélectionné le bon contrôleur.");
}