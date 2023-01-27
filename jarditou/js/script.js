// Récupération des éléments du formulaire
let form = document.getElementById("formulaire_contact");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let genre = document.getElementsByName("genre");
let date = document.getElementById("date");
let cp = document.getElementById("cp");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let email = document.getElementById("email");
let sujet = document.getElementById("sujet");
let commentaire = document.getElementsByName("commentaire")[0];
let validation = document.getElementsByName("validation")[0];


// Ajout d'un écouteur d'événement sur le formulaire pour lancer la vérification de saisie au submit
form.addEventListener("submit", function(e) {
  // Initialisation de la variable de vérification à true (tout est valide par défaut)
  let formValid = true;

  // Vérification de la saisie du nom
  if (nom.value.trim() === "") {
    formValid = false;
    nom.style.borderColor = "red";
  } else {
    nom.style.borderColor = "green";
  }

  // Vérification de la saisie du prénom
  if (prenom.value.trim() === "") {
    formValid = false;
    prenom.style.borderColor = "red";
  } else {
    prenom.style.borderColor = "green";
  }

  // Vérification de la saisie du genre
  let genreChecked = false;
  for (let i = 0; i < genre.length; i++) {
    if (genre[i].checked) {
      genreChecked = true;
      break;
    }
  }
  if (!genreChecked) {
    formValid = false;
    for (let i = 0; i < genre.length; i++) {
      genre[i].parentElement.style.color = "red";
    }
  } else {
    for (let i = 0; i < genre.length; i++) {
      genre[i].parentElement.style.color = "green";
    }
  }

  // Vérification de la saisie de la date
  if (date.value.trim() === "") {
    formValid = false;
    date.style.borderColor = "red";
  } else {
    date.style.borderColor = "green";
  }

// Vérification de la saisie du code postal
if (cp.value.trim() === "") {
  formValid = false;
  cp.style.borderColor = "red";
} else {
  // Vérification de la longueur du code postal
  var cpValue = cp.value.trim();
  if (cpValue.length < 5) {
      formValid = false;
      cp.style.borderColor = "red";
      alert("Le code postal doit contenir au moins 5 caractères");
  } else {
      var codePostalRegex = new RegExp("^[0-9]+$");
      if(!codePostalRegex.test(cpValue)) {
          formValid = false;
          cp.style.borderColor = "red";
          alert("Le code postal doit contenir uniquement des chiffres");
      } else {
          cp.style.borderColor = "green";
      }
  }
}

  // Vérification de la saisie de l'adresse
  if (adresse.value.trim() === "") {
    formValid = false;
    adresse.style.borderColor = "red";
} else {
adresse.style.borderColor = "green";
}

// Vérification de la saisie de la ville
if (ville.value.trim() === "") {
formValid = false;
ville.style.borderColor = "red";
} else {
ville.style.borderColor = "green";
}

// Vérification de la saisie de l'email
if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(email.value)) {
formValid = false;
email.style.borderColor = "red";
} else {
email.style.borderColor = "green";
}

// Vérification de la saisie du sujet
if (sujet.value.trim() === "") {
formValid = false;
sujet.style.borderColor = "red";
} else {
sujet.style.borderColor = "green";
}

// Vérification de la saisie du commentaire
if (commentaire.value.trim() === "") {
formValid = false;
commentaire.style.borderColor = "red";
} else {
commentaire.style.borderColor = "green";
}

// Vérification de la case de validation
if (!validation.checked) {
formValid = false;
validation.parentElement.style.color = "red";
} else {
validation.parentElement.style.color = "green";
}

// Si la variable formValid est false, on empêche l'envoi du formulaire
if (!formValid) {
e.preventDefault();
// alert("Veuillez remplir correctement tous les champs du formulaire.");
}
});
