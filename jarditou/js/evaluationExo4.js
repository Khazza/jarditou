//--------------- EXERCICE 4 - TOTAL D'UNE COMMANDE ---------------
// -------------------------ESSAI N°1 PAS CONCLUANT MAIS FONCTIONNEL (N'arrondi pas)-------------------------
// let PU = prompt("Saisir le prix unitaire");
// let QTECOM = prompt("Saisir la quantité commandée");
// let TOT = PU * QTECOM;
// let REM = 0;
// let PORT = 0;
// let PAP = 0;

// if (TOT >= 100 && TOT <= 200) {
//     REM = TOT * 0.05;
// } else if (TOT > 200) {
//     REM = TOT * 0.1;
// }

// TOT = TOT - REM;

// if (TOT > 500) {
//     PORT = 0;
// } else {
//     PORT = TOT * 0.02;
// }

// if (PORT < 6) {
//     PORT = 6;
// }

// PAP = TOT + PORT;
// console.log("Prix à payer : " + PAP + "€ (Remise : " + REM + "€, Port : " + PORT + "€)");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// -------------------------ESSAI N°2 FONCTIONNEL ET PRIX ARRONDI A 0.01---------------------
let PU = prompt("Saisir le prix unitaire");
let QTECOM = prompt("Saisir la quantité commandée");

let TOT = PU * QTECOM; // calculer le total
let REM = 0; // initialiser la remise à 0
let PORT = 0; // initialiser les frais de port à 0

// calculer la remise en fonction du total
if (TOT > 200) {
  REM = TOT * 0.1;
} else if (TOT > 100) {
  REM = TOT * 0.05;
}

// calculer les frais de port en fonction du total remisé
let totalRemise = TOT - REM;
if (totalRemise > 500) {
  PORT = 0;
} else {
  PORT = totalRemise * 0.02;
  if (PORT < 6) {
    PORT = 6;
  }
}

let PAP = totalRemise + PORT; // calculer le prix à payer

REM = Math.round(REM * 100) / 100;// arrondir le prix avec remise à 0.01 près
PORT = Math.round(PORT * 100) / 100; // arrondir le prix frais de port à 0.01 près
PAP = Math.round(PAP * 100) / 100;// arrondir le prix à payer à 0.01 près

document.write("Remise: " + REM + "€" + "<br>"); // afficher la remise
document.write("Frais de port: " + PORT + "€" + "<br>"); // afficher les frais de port
document.write("Prix à payer: " + PAP + "€" + "<br>"); // afficher le prix à payer