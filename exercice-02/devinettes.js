
"use strict";

// NOM : Gabert Adam
// CLASSE : I.DA-P1A
// DESCRIPTION : Exercice Devinettes JS Bootstrap
// DATE : 09.09.2026
const inputNumber = document.getElementById("inputNumber");
const formulaire = document.querySelector("form");

let alea = genererNombreAleatoire(1, 100);
let essaisRestants = 10;
let repfinale = false;

//genere un nombre aleatoire entre min et max
function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//verifie que le nombre entré et est le nombre secret
function Devinettes(nombre) {


    if (nombre < 1 || nombre > 100 || !Number.isInteger(nombre)) {
        console.error("Veuillez entrer un nombre valide entre 1 et 100.");
        return;
    }


    if (nombre === alea) {
        console.log("Vous avez trouvé le nombre secret !");
        repfinale = true;
    } else {

        if (nombre > alea) {
            console.log("Le nombre secret est plus petit.");
        } else {
            console.log("Le nombre secret est plus grand.");
        }


        essaisRestants--;
        console.log("Il vous reste " + essaisRestants + " essais.");


        if (essaisRestants === 0) {
            console.log("Vous avez utilisé vos 10 essais. Vous avez perdu.");
            repfinale = false;
            recommencer();
            return;
        }
    }


    if (repfinale === true) {
        recommencer();
    }
}

//Recommence une partie si l utilisateur confirme
function recommencer() {
    const confirmation = confirm("Voulez-vous recommencer ?");

    if (confirmation === true) {
        alea = genererNombreAleatoire(1, 100);
        essaisRestants = 10;
        repfinale = false;
        console.log("Nouvelle partie ! Vous avez 10 essais.");
    } else {
        console.log("Bonne journée alors !");
        window.location.href = "../index.html";

    }
}


formulaire.addEventListener("submit", function (event) {


    event.preventDefault();


    const nombre = Number(inputNumber.value);


    Devinettes(nombre);


    inputNumber.value = "";
});
