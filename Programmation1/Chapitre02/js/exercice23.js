// Daniel Auger - 23 novembre 2019

// Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues pour leur haut taux
// de pollution atmosphérique. L’indice de pollution atmosphérique dépend de plusieurs facteurs et il est calculé
// régulièrement.
//
// L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale. Si sa valeur de
// l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la
// valeur de l’indice redevienne normale. Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50,
// on avise aussi les industries de la liste C. Pour toutes les autres valeurs, écrire « Valeur impossible ».
//
// Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste devrait être
// affichée.

var indicePolution;

indice = Number(prompt("Entrez l'indice de polution SVP: "));

if (indice >= 0 && indice <= 1){
    if (indice <= 0.31){
        document.write("<h1>Aucune industrie ne doit suspendre ses activitées !</h1>");
    }
    else if(indice < 0.4){
        document.write("<h1>Les industries de la liste (A) doivent suspendre ses activitées !</h1>");
    }
    else if(indice < 0.5){
        document.write("<h1>Les industries de le liste (A et B) doivent suspendre leurs activitées !</h1>");
    }
    else if(indice <= 1){
        document.write("<h1>Les industries de le liste (A, B et C) doivent suspendre leurs activitées !</h1>");
    }
}
else{
    document.write("<h1>Valeur Impossible</h1>")
}