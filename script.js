
// Make scores
playerScore = 0
computerScore = 0

document.getElementById("playScore").textContent = "Your score: " + playerScore;
document.getElementById("compScore").textContent = "Computer's score: " + computerScore;

// Function: get computer selection
    // Create options
let options = [];
options[0] = "rock";
options[1] = "paper";
options[2] = "scissors"

    //  Computer selects "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let comChoice = options[randomNum];
    // console.log(comChoice);
    return(comChoice)
}
let computerSelection = getComputerChoice()

// Make buttons work
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissors");

let playerSelection = '';

function getPlayerSelection(id) {
  if (id === 'rock') {
    playerSelection = 'rock';
  } else if (id === 'paper') {
    playerSelection = 'paper';
  }  else if (id === 'scissors') {
    playerSelection = 'scissors';
  }
}

rockButton.addEventListener('click', function() {
  getPlayerSelection('rock');
  document.getElementById("PlayerChoiceHTML").textContent = "You chose rock";
  game();
});

paperButton.addEventListener('click', function() {
    getPlayerSelection('paper');
    document.getElementById("PlayerChoiceHTML").textContent = "You chose paper";
    game();
});

scissorButton.addEventListener('click', function() {
    getPlayerSelection('scissors');
    document.getElementById("PlayerChoiceHTML").textContent = "You chose scissors";
    game();
});


// Create game
function game() {
document.getElementById("finalMess").textContent = '‧˚ ✩°｡⋆♡ ⋆˙⟡♡ ˙⋆˙♡⟡˙⋆♡⋆｡°✩˚‧'


    // Get computer choice
getComputerChoice()
let computerSelection = getComputerChoice()
console.log('COMPUTER CHOICE IN GAME FUNCTION')
console.log(computerSelection)
document.getElementById("ComputerChoiceHTML").textContent = "The computer chose " + computerSelection;
console.log('PLAYER SELECTION IN GAME FUNCTION')
console.log(playerSelection)


// Outcomes
ifTie = (computerSelection === playerSelection);
ifComRock = (computerSelection === "rock");
IfComPaper = (computerSelection === "paper");
ifComScissors = (computerSelection === "scissors");
ifPlayScissors = (playerSelection === "scissors");
ifPlayRock = (playerSelection === "rock");
ifPlayPaper = (playerSelection === "paper");

    // If tie is true
if (ifTie == true) {
        // alert("Tie! Try again!")
        document.getElementById("resultsHTML").textContent = "Tie! Please try again!"
}

    // Play round
if (ifTie == false) {
    console.log('Not a tie!')
    // If computer chooses rock:
    if (ifComRock == true) {
         if (ifPlayScissors == true) {
            document.getElementById("resultsHTML").textContent = "You lose! Rock breaks scissors!"
            computerScore += 1;
        } else if (ifPlayPaper == true) {
            document.getElementById("resultsHTML").textContent = "You win! Paper covers rock!"
            playerScore += 1;
        }

    // If computer chooses paper:
    } else if (IfComPaper == true) {
        if (ifPlayScissors == true) {
            document.getElementById("resultsHTML").textContent = "You win! Scissors cut paper!"
            playerScore += 1;
        } else if (ifPlayRock) {
            document.getElementById("resultsHTML").textContent = "You lose! Paper covers rock!"
            computerScore += 1;
        }

    // If computer chooses scissors:
    } else if (ifComScissors == true) {
        if (ifPlayPaper == true) {
            document.getElementById("resultsHTML").textContent = "You lose! Scissors cut paper!"
            computerScore += 1;
        } else if (ifPlayRock == true) {
            document.getElementById("resultsHTML").textContent = "You win! Rock breaks scissors!"
            playerScore += 1;
        }
}
}
document.getElementById("playScore").textContent = "Your score: " + playerScore;
document.getElementById("compScore").textContent = "Computer's score: " + computerScore;

// End game when someone reaches 5 points
if (computerScore == 5) {
    document.getElementById("finalMess").textContent = "The computer won!"
    computerScore = 0
    playerScore = 0

}
if (playerScore == 5) {
    document.getElementById("finalMess").textContent = "You won!"
    computerScore = 0
    playerScore = 0
}

}
