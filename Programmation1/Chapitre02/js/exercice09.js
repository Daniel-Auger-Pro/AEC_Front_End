// Daniel Auger - 14 novembre 2019

// Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot
// de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas
// correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var nomUtilisateur,motDePasse;

bonUtilisateur = "admin"; bonMotDePasse="12345";

nomUtilisateur = prompt("Veuillez entrer le nom d'utilisateur svp :");
motDePasse = prompt("Veuillez entrer le mot de passe svp :");

if ((nomUtilisateur === bonUtilisateur) && (motDePasse === bonMotDePasse)){
    document.write(" Bonjour " + nomUtilisateur);
    }
    else {
        document.write(" Votre nom d’utilisateur ou votre mot de passe est invalide.");
        }
