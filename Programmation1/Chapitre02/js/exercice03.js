// Daniel Auger - 14 novembre 2019

// Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le
// cas écrire « BONSOIR ».

var nbr1,nbr2,plusPetit;

plusPetit = 9;

nbr1 = Number(prompt("Veuillez entrer le nombre 1 svp :"));
nbr2 = Number(prompt("Veuillez entrer le nombre 2 svp :"));

if(nbr1 > plusPetit && nbr2 > plusPetit){
    document.write(" BONJOUR ");
}
    else{
        document.write(" BONSOIR ");
    }