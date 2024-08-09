const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "its a tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  computerDisplay.textContent = `PLAYER :${computerChoice}`;
  playerDisplay.textContent = `PLAYER :${playerChoice}`;
  resultDisplay.textContent = `${result}`;

  resultDisplay.classList.remove("greentext,redtext");

  switch (result) {
    case "YOU WIN":
        resultDisplay.classList.remove("greentext,redtext");
      resultDisplay.classList.add("greentext");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
        resultDisplay.classList.remove("greentext,redtext");
      resultDisplay.classList.add("redtext");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
   
      
  }
}
