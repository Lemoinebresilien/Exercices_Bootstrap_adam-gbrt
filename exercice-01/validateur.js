"use strict"
// 
//  NOM: Gabert Adam
//  CLASSE: I.DA-P1A
//  DESCRIPTION: Exercice Validateur Mot de passe Bootstrap
//  DATE: 09.09.2026
// 
//Initialisation

const mdp = document.getElementById("inputPassword2");
const formulaire = document.querySelector("form");
const spec = "!@#$%^&*"
let verif1 = null;
let verif2 = null;
let verif3 = null;
let verif4 = null;
let repfinale = null;


//Traitement
//Verifie chaque condition grace a une boucle et renvoie true si le mdp est correct
function validerMotDePasse(motDePasse) {

    const mdp = motDePasse;
    for (let i = 0; i < mdp.length; i++) {
        const element = mdp[i];
        if (element >= "a" && element <= "z") {
            verif1 = true;
            break;
        }
        else {
            verif1 = false;
        }
    }

    for (let i = 0; i < mdp.length; i++) {
        const element = mdp[i];
        if (element >= "A" && element <= "Z") {
            verif2 = true;
            break;
        }
        else {
            verif2 = false;
        }
    }

    for (let i = 0; i < mdp.length; i++) {
        const element = mdp[i];
        if (element >= 0 && element <= 9) {
            verif3 = true;
            break;
        }
        else {
            verif3 = false;
        }
    }
    for (const element of spec) {
        if (mdp.includes(element)) {
            verif4 = true;
            break;
        }
        else {
            verif4 = false;
        }
    }
    //Sortie
    console.log(verif1);
    console.log(verif2);
    console.log(verif3);
    console.log(verif4);

    if (verif1 != true) {
        console.log("Pas de Minuscule");
        repfinale = false;
    }
    if (verif2 != true) {
        console.log("Pas de Majuscule");
        repfinale = false;
    }
    if (verif3 != true) {
        console.log("Pas de Chiffre");
        repfinale = false;
    }
    if (verif4 != true) {
        console.log("Pas de Characteres speciaux");
        repfinale = false;

    }
    else {
        repfinale = true;
    }
    repfinale = verif1 && verif2 && verif3 && verif4;

    return repfinale;
}



formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    const motDePasse = mdp.value;

    const resultat = validerMotDePasse(motDePasse);

    if (resultat === true) {
        console.log("Mot de passe Valide");
    } else {
        console.log("Mot de passe Invalide");
    }

});