// Action du bouton LIKE //

// Récupérez le bouton "like" et l'icône "like"
const likeButton = document.getElementById('likeButton');
const likeIcon = document.getElementById('likeIcon');

// Définissez une variable pour suivre l'état du "like"
let isLiked = false;

// Gestionnaire d'événements pour le survol du bouton
likeButton.addEventListener('mouseover', () => {
  if (!isLiked) {
    likeIcon.src = '../image/jaimeplein.png'; // Changez l'image au survol
  }
});

// Gestionnaire d'événements pour quitter le survol du bouton
likeButton.addEventListener('mouseout', () => {
  if (!isLiked) {
    likeIcon.src = '../image/jaime.png'; // Revenez à l'image d'origine
  }
});

// Gestionnaire d'événements pour le clic sur le bouton
likeButton.addEventListener('click', () => {
  if (!isLiked) {
    isLiked = true; // Marquez le "like" comme effectué
    likeIcon.src = '../image/jaimeplein.png'; // Changez l'image pour indiquer le "like"
  } else {
    isLiked = false; // Annulez le "like"
    likeIcon.src = '../image/jaime.png'; // Revenez à l'image d'origine
  }
});


//Action ETOILES //


// Sélection des éléments
const starButtons = document.querySelectorAll(".star");

let rating = 0;

// Gestion des événements sur chaque bouton
starButtons.forEach((button, index) => {

  // Au survol
  button.addEventListener("mouseover", () => {
    showRating(index+1);
  });

  // Au clic
  button.addEventListener("click", () => {
    
    // Si re-clic sur la même étoile
    if(rating == index + 1) {
      rating = 0;
    }
    
    // Sinon nouveau clic
    else {
      rating = index + 1; 
    }
    
    showRating(rating);
    
  });

  // A la sortie de la souris
  button.addEventListener("mouseout", () => {
    showRating(rating);
  });

});

// Fonction d'affichage du rating
function showRating(index) {

  // Parcourt toutes les étoiles
  starButtons.forEach((button, i) => {

    // Affiche pleine si indice < rating
    if(i < index) {
      button.src = "../image/etoilepleine.png";
    } 
    
    // Sinon affiche vide
    else {
      button.src = "../image/etoilevide.png";
    }

  });

}




/*MA LISTE*/
