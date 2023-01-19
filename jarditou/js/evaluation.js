//--------------- EXERCICE 1 - CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX ---------------
// let under20 = 0; //initialiser le total de personne sous 20 ans à 0
// let between20and40 = 0; //initialiser le total de personne entre 20 et 40 ans à 0
// let over40 = 0; //initialiser le total de personne au dessus de 40 ans à 0

// while (true) {
//     let age = parseInt(prompt("Entrez un âge (ou 100+ pour arrêter): "));
//     if (age === 100) {
//         over40++;
//         break;
//     }
//     if (age < 20) {
//         under20++;
//     } else if (age <= 40) {
//         between20and40++;
//     } else {
//         over40++;
//     }
// }

// console.log(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// console.log(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// console.log(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);

//--------------- EXERCICE 2 - CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX ---------------
// function displayMultiplicationTable() {
//   let num = prompt(
//     "Entrez un nombre pour afficher sa table de multiplication:"
//   ); 
//   let range = prompt("Entrez jusqu'a quel multiple:");
//   for (let i = 1; i <= range; i++) {
//     console.log(`${i} x ${num} = ${i * num}`);
//   }
// }
// displayMultiplicationTable(); //Affichage de la table

//--------------- EXERCICE 3 - RECHERCHE D'UN PRENOM ---------------
// let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// function deleteName() {
//   let name = prompt("Entrez un prénom à supprimer:");
//   let found = false;

//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] === name) {
//       found = true;
//       for (let j = i; j < tab.length - 1; j++) {
//         tab[j] = tab[j + 1];
//       }
//       tab[tab.length - 1] = "";
//       break;
//     }
//   }

//   if (!found) {
//     window.alert("Le prénom n'a pas été trouvé dans le tableau.");
//   } else {
//     window.alert("Le prénom a été supprimé avec succès.");
//   }
// }

// deleteName();
// alert(tab);

//--------------- EXERCICE 4 - TOTAL D'UNE COMMANDE ---------------
// ------------------------------------------------------------------------------------------
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

// let PU = prompt("Saisir le prix unitaire");
// let QTECOM = prompt("Saisir la quantité commandée");

// let TOT = PU * QTECOM; // calculer le total
// let REM = 0; // initialiser la remise à 0
// let PORT = 0; // initialiser les frais de port à 0

// // calculer la remise en fonction du total
// if (TOT > 200) {
//   REM = TOT * 0.1;
// } else if (TOT > 100) {
//   REM = TOT * 0.05;
// }

// // calculer les frais de port en fonction du total remisé
// let totalRemise = TOT - REM;
// if (totalRemise > 500) {
//   PORT = 0;
// } else {
//   PORT = totalRemise * 0.02;
//   if (PORT < 6) {
//     PORT = 6;
//   }
// }

// let PAP = totalRemise + PORT; // calculer le prix à payer

// REM = Math.round(REM * 100) / 100;// arrondir le prix avec remise à 0.01 près
// PORT = Math.round(PORT * 100) / 100; // arrondir le prix frais de port à 0.01 près
// PAP = Math.round(PAP * 100) / 100;// arrondir le prix à payer à 0.01 près

// console.log("Remise: " + REM + "€"); // afficher la remise
// console.log("Frais de port: " + PORT + "€"); // afficher les frais de port
// console.log("Prix à payer: " + PAP + "€"); // afficher le prix à payer


//--------------- EXERCICE 5 - verification d'un formulaire ---------------
