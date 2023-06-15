"use strict";

 // Récupération des scores de chaque joueur
const currentScore1 = document.getElementById("current-score1");
const currentScore2 = document.getElementById("current-score2");

 // Récupération des boutons de chaque joueur
const player1 = document.getElementById("playerBtn1");
const player2 = document.getElementById("playerBtn2");

 // Récupération du score limite pour réinitialiser
const maxScoreItem = document.getElementById("max-score");
const newMaxScore = document.getElementById("newMaxScore");

 // Récupération du bouton de réinitialisation
const reset = document.getElementById("resetBtn");

 //Le score affiché
let maxScore = parseInt(maxScoreItem.value);

 // Afficher le nouveau score-max
maxScoreItem.addEventListener("change",() => {
    newMaxScore.textContent = maxScoreItem.value;
});

 // Afficher le score du  joueur 1
let score1 = 0;
player1.addEventListener("click", () => {
  score1++;
  currentScore1.style.color = "green";
  if (score1 <= maxScore) {
    currentScore1.textContent = score1;
  }
});

 // Afficher le score du joueur 1
let score2 = 0;
player2.addEventListener("click", () => {
  score2++;
  currentScore2.style.color = "green";
  if (score2 <= maxScore) {
    currentScore2.textContent = score2;
  }
});

 // Réinitialiser le score à 0
reset.addEventListener("click", () => {
  location.reload(true);
 
  
});