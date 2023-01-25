// --------------- EXERCICE 1 - CALCUL DU NOMBRE DE JEUNES, DE MOYENS ET DE VIEUX ---------------
let under20 = 0; //initialiser le total de personne sous 20 ans à 0
let between20and40 = 0; //initialiser le total de personne entre 20 et 40 ans à 0
let over40 = 0; //initialiser le total de personne au dessus de 40 ans à 0

while (true) {
    let age = parseInt(prompt("Entrez un âge (ou 100+ pour arrêter): "));

    if (age === 100 ) {
        over40++;
        break;
    }
    if (age < 20) {
        under20++;
    } else if (age <= 40) {
        between20and40++;
    } else {
        over40++;
    }
}

// console.log(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// console.log(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// console.log(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
// document.write(`Il y a ${under20} personnes d'âge inférieur à 20 ans.`);
// document.write(`Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.`);
// document.write(`Il y a ${over40} personnes d'âge supérieur à 40 ans.`);
document.write(`<p style="font-size: 20px;"> Il y a ${under20} personnes d'âge inférieur à 20 ans.</p><br>`);
document.write(`<p style="font-size: 20px;"> Il y a ${between20and40} personnes d'âge compris entre 20 et 40 ans.</p><br>`);
document.write(`<p style="font-size: 20px;"> Il y a ${over40} personnes d'âge supérieur à 40 ans.</p><br>`);