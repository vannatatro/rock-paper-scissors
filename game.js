 
// Create options
let options = [];
options[0] = "rock";
options[1] = "paper";
options[2] = "scissors"

//  Computer selects "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let comChoice = options[randomNum]
    return(comChoice)
}

// User enters "Rock", "Paper", or "Scissors"
function getPlayerChoice () {
    let playerChoice = prompt('Enter rock, paper, or scissors')
    let playerChoiceLower = playerChoice.toLowerCase()
    return(playerChoiceLower)
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(computerSelection)
console.log(playerSelection)

// Outcomes
ifTie = (computerSelection === playerSelection)
ifComRock = (computerSelection === "rock");
IfComPaper = (computerSelection === "paper");
ifComScissors = (computerSelection === "scissors");
ifPlayScissors = (playerSelection === "scissors");
ifPlayRock = (playerSelection === "rock");
ifPlayPaper = (playerSelection === "paper");

// Play round
function playRound(playerSelection, computerSelection) {
    // If tie:
    if (ifTie == true) {
        tie = "Tie! Please try again";
        return(tie);

    // If computer chooses rock:
    } else if (ifComRock == true) {
            if (ifPlayScissors == true) {
                return("You lose! Rock breaks scissors!")
            } else if (ifPlayPaper == true) {
                return("You win! Paper covers rock!")
            }

    // If computer chooses paper:
    } else if (IfComPaper == true) {
            if (ifPlayScissors == true) {
                return("You win! Scissors cut paper!")
            } else if (ifPlayRock) {
                    return("You lose! Paper covers rock!")
            }

    // If computer chooses scissors:
    } else if (ifComScissors == true) {
            if (ifPlayPaper) {
                return("You lose! Scissors cut paper!")
            } else if (ifPlayRock) {
                return("You win! Rock breaks scissors!")
            }
    }
}
console.log(playRound())
