// Daniel Auger - 14 novembre 2019

// Exercise 5 : Lire une note au clavier et afficher la lettre correspondante.
//
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E
//
// * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
// (en sens inverse).

var note,a,b,c,d;

a = 90; b = 80; c = 70; d = 60;

note = Number(prompt("Veuillez entrer une note d'étudiant svp :"));

// Vérification de la note maximum équivalente pour lui accordé une lettre.

if (note < d ){
    document.write(" La note en lettre équivalent à : " + note + " égale à : E");
}
else if(note < c ) {
    document.write(" La note en lettre équivalent à : " + note + " égale à : D");
    }
    else if(note < b ){
        document.write(" La note en lettre équivalent à : " + note + " égale à : C");
        }
        else if(note < a ){
            document.write(" La note en lettre équivalent à : " + note + " égale à : B");
            }
            else{
                document.write(" La note en lettre équivalent à : " + note + " égale à : A");
                }