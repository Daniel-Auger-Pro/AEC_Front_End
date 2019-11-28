// Daniel Auger - 23 novembre 2019

// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu,impot,reste;

revenu = Number(prompt("Entreez le montant du revenu SVP : "));

if(revenu > 0 && revenu <= 7000){
    impot = revenu * .16;
}
else if(revenu > 7000 && revenu <= 14000){
    reste = revenu - 1120;
    impot = 1120 + (reste * 0.195);
}
else if(revenu > 14000 && revenu <= 23000){
    reste = revenu - 2485;
    impot = 2485 + (reste * 0.215);
}
else if (revenu > 23000 && revenu <= 50000){
    reste = revenu - 4420;
    impot = 4420 + (reste * 0.245);
}
else if(revenu > 50000){
    reste = revenu - 11035;
    impot = 11035 + (reste * 0.26);
}
else{
    document.write("<h1>Le montant doit être suppérieur à $0.00 !</h1>");
}
impot = impot.toFixed(2);
document.write("<h1>La retenue pour l'impôt est de $" + impot +"</h1>");