// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// --------- POUR LES EXERCICES 1 A 4 UTILISATION POSSIBLE DE LA PAGE HTML VIDE "indexVidePourExo.html"
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// --------------- EXERCICE 1 - CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX ---------------
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

// // console.log(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// // console.log(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// // console.log(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
// // document.write(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// // document.write(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// // document.write(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
// document.write(`<p style="font-size: 20px;"> Il y a ${under20} personnes d'âge inférieur à 20 ans.</p><br>`);
// document.write(`<p style="font-size: 20px;"> Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.</p><br>`);
// document.write(`<p style="font-size: 20px;"> Il y a ${over40} personnes d'âge supérieur à 40 ans.</p><br>`);


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



//--------------- EXERCICE 2 - TABLE DE MULTIPLICATION  ---------------
// function displayMultiplicationTable() {
//     //Demande à l'utilisateur de saisir un nombre
//     let num = prompt("Entrez un nombre pour afficher sa table de multiplication:");
//     //Demande à l'utilisateur de saisir jusqu'à quel multiple
//     let range = prompt("Entrez jusqu'a quel multiple:");
//     //Initialisation de la variable pour stocker les résultats
//     let output = "";
//     // Boucle qui parcours les multiples
//     for (let i = 1; i <= range; i++) {
//       //Ajout de chaque résultat à la variable output
//       output += `${i} x ${num} = ${i * num}<br>`;
//     }
//     //affichage des résultats dans l'élément HTML avec l'id "result"
//     document.getElementById("result").innerHTML = output;
//   }
//   //Appel de la fonction pour lancer le script
//   displayMultiplicationTable();


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


//--------------- EXERCICE 3 - RECHERCHE D'UN PRENOM ---------------
// -------------------------ESSAI N°1
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

// -------------------------ESSAI N°2
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// console.log(tab);
// while (true) {
//   var prenom = prompt("Entrez un prénom à supprimer:");
//   var index = tab.indexOf(prenom);
  
//   if (index === -1) {
//     alert("Ce prénom n'a pas été trouvé dans le tableau.");
//   } else {
//     tab.splice(index, 1);
//     alert("Le prénom a été supprimé avec succès.");
//     break;
//   }
// }
// console.log(tab);

// -------------------------ESSAI N°3
// // Déclaration du tableau
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// // Afficher le tableau initial sur la page
// document.getElementById("tableau-initial").innerHTML = "<h3>Tableau initial: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";

// // Boucle pour demander un prénom à supprimer
// while (true) {
//     // Demander à l'utilisateur d'entrer un prénom
//     var prenom = prompt("Entrez un prénom à supprimer:");
//     // Si l'utilisateur appuie sur annuler (null) on sort de la boucle
//     if(prenom == null){
//         break;
//     }
//     // Mettre tous les prénoms en minuscule
//     prenom = prenom.toLowerCase();
//     // Trouver la place du prénom dans le tableau en utilisant la fonction map pour mettre tous les prénoms en minuscule
//     var index = tab.map(function(e) { return e.toLowerCase(); }).indexOf(prenom);

//     // Si le prénom n'a pas été trouvé
//     if (index === -1) {
//         alert("Ce prénom n'a pas été trouvé dans le tableau.");
//     } else {
//         // Supprimer le prénom en utilisant splice
//         tab.splice(index, 1);
//         // Afficher le nouveau tableau sur la page
//         document.getElementById("nouveau-tableau").innerHTML = "<h3>Nouveau tableau: </h3><ul>" + tab.map(prenom => "<li>" + prenom + "</li>").join("") + "</ul>";
//         break;
//     }
// }

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


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
// -------------------------ESSAI N°2 FONCTIONNEL ET PRIX ARRONDI A 0.01---------------------
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

// document.write("Remise: " + REM + "€" + "<br>"); // afficher la remise
// document.write("Frais de port: " + PORT + "€" + "<br>"); // afficher les frais de port
// document.write("Prix à payer: " + PAP + "€" + "<br>"); // afficher le prix à payer


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


//--------------- EXERCICE 5 - verification d'un formulaire ---------------
const form = document.getElementById("formulaire_contact");

// Détecter l'événement d'envoi
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // variable error pour vérifier s'il y a des champs vides
  let error = false;

  // Récupération de tous les champs
  let inputs = form.getElementsByTagName("input");

  // Boucle pour vérifier si les champs sont vides
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      // Ajout de bordure rouge pour indiquer une erreur
      inputs[i].style.borderColor = "red";

      // Changement de la valeur de error à true pour indiquer une erreur
      error = true;
    } else {
      // enlever la bordure rouge si le champ est rempli
      inputs[i].style.borderColor = "";
    }
  }

  // Empêcher l'envoi du formulaire en cas d'erreur
  if (error) {
    e.preventDefault();
  }
});