// Daniel Auger - 23 novembre 2019

// Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nbr1,nbr2,nbr3,plusPetit,plusGrand;

nbr1 = Number(prompt("Entrez un nombre SVP : "));
nbr2 = Number(prompt("Entrez un deuxième nombre différent du premier nombre SVP : "));
nbr3 = Number(prompt("Entrez un troisième nombre différent des deux premiers SVP : "));

if(nbr1 != nbr2 && nbr1 != nbr3 && nbr2 != nbr3){
    if(nbr1 < nbr2 && nbr1 < nbr3){
        plusPetit = nbr1;
    }
    else if( nbr2 < nbr1 && nbr2 < nbr3){
        pluspetit = nbr2;
    }
    else if(nbr3 < nbr1 && nbr3 < nbr2){ // Cette vérification pourrait être skipper par déduction.
        plusPetit = nbr3;
    }
    if(nbr1 > nbr2 && nbr1 > nbr3){
        plusGrand = nbr1;
    }
    else if(nbr2 > nbr1 && nbr2 > nbr3){
        plusGrand = nbr2;
    }
    else if(nbr3 > nbr1 && nbr3 > nbr2){ // Cette vérification pourrait être skipper par déduction.
        plusGrand = nbr3;
    }
    document.write("Le nombre le plus petit est le chiffre : " + plusPetit + " et le plus grand est le chiffre : " +
    plusGrand + ".")
}
else{
    document.write("Erreur : Vous avez indiqué deux ou trois nombres identiques.")
}