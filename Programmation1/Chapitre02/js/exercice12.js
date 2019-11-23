// Daniel Auger - 23 novembre 2019<

// Calculer le prix des assurances pour un véhicule.
//
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
//
// S’il est plus vieux, le taux sera de 3 %.
//
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

var genre,age,prixDuVehicule,taux,prixAssurance,couleur;

prixDuVehicule = Number(prompt("Veuillez entrer le prix du véhicule SVP :"));
genre = prompt("Veuillez entrer le sexe de la personne SVP :");
age = Number(prompt("Veuillez entrer l'âge de la personne SVP : "));

if(prixDuVehicule > 0) {
    if(age >= 16){
        if (genre.toLocaleUpperCase() === "M") {
            couleur = "M";
            if (age >= 16 && age <= 25) {
                taux = 0.05;
            }
            else {
                taux = 0.03;
            }
        }
        else if (genre.toLocaleUpperCase() === "F") {
            couleur = "F"
            if (age >= 16 && age <= 25) {
                taux = 0.03;
            }
            else {
                taux = 0.02;
            }
        }
        else {
            document.write("Le sexe n'est pas valide !");
        }
    }
    else{
        document.write("L'âge ne peut être inférieur à 16 !")
    }
}
else{
    document.write("Le prix ne peut êtes inférieur ou égal à zéro !")
}

prixAssurance = prixDuVehicule * taux;
prixAssurance = prixAssurance.toFixed(2);
document.write("<p classe='couleur'>" + "Le prix de l'assurance vaut : $" + prixAssurance+"</p>");