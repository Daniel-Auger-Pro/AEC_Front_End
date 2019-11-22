// Daniel Auger - 14 novembre 2019

// Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond pas à
// un mois, affichez le message suivant : « Mois invalide ».

var nbr;

nbr = Number(prompt("Veuillez entrer un nombre svp :"));

if (nbr === 1){
    document.write(" Le mois correspondant est Janvier");
    }
    else if (nbr === 2){
        document.write(" Le mois correspondant est Février");
        }
        else if (nbr === 3){
            document.write(" Le mois correspondant est Mars");
            }
            else if (nbr === 4){
                document.write(" Le mois correspondant est Avril");
                }
                else if (nbr === 5){
                    document.write(" Le mois correspondant est Mai");
                    }
                    else if (nbr === 6){
                        document.write(" Le mois correspondant est Juin");
                        }
                        else if (nbr === 7){
                            document.write(" Le mois correspondant est Juillet");
                            }
                            else if (nbr === 8){
                                document.write(" Le mois correspondant est Août");
                                }
                                else if (nbr === 9){
                                    document.write(" Le mois correspondant est Septembre");
                                    }
                                    else if (nbr === 10){
                                        document.write(" Le mois correspondant est Octobre");
                                        }
                                        else if (nbr === 11){
                                            document.write(" Le mois correspondant est Novembre");
                                            }
                                            else if (nbr === 12){
                                                document.write(" Le mois correspondant est Décembre");
                                                }
                                                else {
                                                    document.write(" Mois invalide");
                                                    }