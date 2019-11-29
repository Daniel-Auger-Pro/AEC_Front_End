/*
Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot et d’afficher sa position.
Pour faire ce choix, utilisez la table  suivante :

position à afficher         angle

Main fermée                 0 <= angle <= 39
Main agrippe		        40 <= angle <= 89
Main ouverte		        90 <= angle <= 180

Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.
*/

var angle,robot;

angle = Number(prompt("Entrez l'angle de la main du robot :"));

if(angle >= 0 && angle <= 180) {
    if (angle >= 0 && angle <= 39) {
        robot = "main fermée";
    } else if (angle >= 40 && angle <= 89) {
        robot = "main agrippe";
    } else if (angle >= 90 && angle <= 180) {
        robot = "main ouverte";
    }
    document.write(" Le Robot à la " + robot + ".");
}
else{
    document.write("Le robot est hors de contrôle")
}