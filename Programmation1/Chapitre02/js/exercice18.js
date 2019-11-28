// Daniel Auger - 23 novembre 2019

// Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est
// supérieure ou égale à 60.

var note;

note = Number(prompt("Entrez une note SVP : "));

if(note >= 60){
    document.write("<h1>Bravo !</h1>");
}
else{
    document.write("<h1>Échec !</h1>")
}