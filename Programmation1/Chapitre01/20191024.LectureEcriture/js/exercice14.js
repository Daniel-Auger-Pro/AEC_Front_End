// Daniel Auger - 24 octobre 2019

// Créez un convertisseur d'unités de mesures. L'usager entre les dimensions de son terrain en pi2.
// Vous affichez les dimensions en m2, arpents2, hectares.
// 1 pi2 = 0.092903 m2
// 1m2 = 0.000292505 arpent2
// 1m2 = 0.0001 hectare

// Étape 1 : Trouver les variables.

var pieds2; var metre2; var arpents2; var hectares;

//  Étape 2 : Lecture (demander à l'usager des données)

pieds2 = Number.parseFloat((prompt("Entrez le nombre de pieds carré de votre terrain : ")));

// Étape 3 : Les calcules

metre2 = pieds2 * 0.092903;
arpents2 = metre2 * 0.000292505;
hectares = metre2 * 0.0001;

// Ne permet que trois décimales dans la réponse.
metre2 = metre2.toFixed(3);
arpents2 = arpents2.toFixed(3);
hectares = hectares.toFixed(3);

// Étape 4 : AFFICHE les résultats

console.log("La dimension de votre terrain de " + pieds2 + " pieds carré, équivaux à " + metre2 +
    " mètres carré ou à " + arpents2 + " arpents carré ou à "+ hectares + " hectares.");

alert("La dimension de votre terrain de " + pieds2 + " pieds carré, équivaux à " + metre2 +
    " mètres carré ou à " + arpents2 + " arpents carré ou à "+ hectares + " hectares.");