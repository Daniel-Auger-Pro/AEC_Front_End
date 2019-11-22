// Daniel Auger - 14 novembre 2019

// Exercise 5 : Lire un degré de température. Si la température est comprise entre -40 et -10 écrire
// « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var degre, plusBas, plusHaut;

plusBas = -40;
plusHaut = -10;

degre = Number(prompt("Veuillez entrer une température plus haute que -40°C svp :"));

if(degre >= plusBas && degre <= plusHaut){
    document.write(" HAAAAAAAAA! Il fait froid");
}
    else{
    document.write(" Enfin une belle journée!");
    }
