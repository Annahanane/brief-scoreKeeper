"use strict";
 // Récupération des scores de chaque joueur
const currentScore1 = document.getElementById("current-score1");
const currentScore2 = document.getElementById("current-score2");
 // Récupération des boutons : chaque joueur
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
 // Récupération du score limite pour reinitialiser
const maxScoreItem = document.getElementById("max-score");
 // Récuperation du bouton de réinitialisation
const reset = document.getElementById("reset");
 
function keeperScore() {
 // Le score affiché
let maxScore = parseInt(maxScoreItem.textContent);

 // Afficher le score du 1er joueur 
let currentScore1 = 0; 
player1.addEventListener("click", () => {
  if (currentScore1 < maxScore) {
    currentScore1++;
    maxtScoreItem.textContent = currentScore1;
  }
});

 // Afficher le score du 2me joueur
let currentScore2 = 0; 
player2.addEventListener("click", () => {
  if (currentScore2 < maxScore) {
    currentScore2++;
    maxScoreItem.textContent = currentScore2;
  }
});
 // Réinitialiser le score
reset.addEventListener("click", () => {
  currentScore1 = 0;
  currentScore2= 0;

  currentScoreItem.textContent;
});
}
keeperScore();
