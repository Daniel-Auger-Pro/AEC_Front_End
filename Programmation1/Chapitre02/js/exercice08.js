// Daniel Auger - 14 novembre 2019

// Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une
// semaine de travail normale est de 40 heures.

var tauxHoraire,nombreHeureTravaillees,salaireTotal,heureSupplementaire;

max = 40;

tauxHoraire = Number(prompt("Veuillez entrer le taux horaire svp :"));
nombreHeureTravaillees = Number(prompt("Veuillez entrer le nombre d'heures svp :"));

// Véréfication s'il y a des heures supplémentaires et calcule du tout.

if (nombreHeureTravaillees <= max ){
    salaireTotal = nombreHeureTravaillees * tauxHoraire;
    document.write(" Le salaire Total est de : " + salaireTotal);
}
else {
    heureSupplementaire = nombreHeureTravaillees - max;
    salaireTotal = ( max * tauxHoraire) + (heureSupplementaire * (tauxHoraire * 2));
    document.write(" Le salaire Total est de : " + salaireTotal);
    }