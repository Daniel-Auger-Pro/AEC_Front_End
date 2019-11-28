// Daniel Auger - 23 novembre 2019

// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var age;

age = Number(prompt("Entrez l'âge SVP : "));

if(age > 0) {
    if (age >= 18) {
        document.write("<h1>Adulte !</h1>");
    } else if (age <= 17 && age >= 12) {
        document.write("<h1>Adolescent !</h1>");
    } else {
        document.write("<h1>Enfant !</h1>");
    }
}
else{
    document.write("<h1>L'âge doit être positif !</h1>");
}
