// Create score
playerScore = 0

//  Create game
function game(){


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
// console.log(computerSelection)
// console.log(playerSelection)

// Outcomes
ifTie = (computerSelection === playerSelection);
ifComRock = (computerSelection === "rock");
IfComPaper = (computerSelection === "paper");
ifComScissors = (computerSelection === "scissors");
ifPlayScissors = (playerSelection === "scissors");
ifPlayRock = (playerSelection === "rock");
ifPlayPaper = (playerSelection === "paper");
// console.log(ifTie)


// Play round
function playRound(playerSelection, computerSelection) {
    if (ifTie == true) {
        // alert("Tie! Try again!")
        console.log("Tie! Please try again!")
        game();
        // return("Tie! Try again!")
    } else if (ifTie == false) {
    // If computer chooses rock:
    if (ifComRock == true) {
         if (ifPlayScissors == true) {
            return("You lose! Rock breaks scissors!")
        } else if (ifPlayPaper == true) {
            playerScore += 1
            return("You win! Paper covers rock!")
        }

    // If computer chooses paper:
    } else if (IfComPaper == true) {
        if (ifPlayScissors == true) {
            playerScore += 1
            return("You win! Scissors cut paper!")
        } else if (ifPlayRock) {
            return("You lose! Paper covers rock!")
        }

    // If computer chooses scissors:
    } else if (ifComScissors == true) {
        if (ifPlayPaper == true) {
            return("You lose! Scissors cut paper!")
        } else if (ifPlayRock == true) {
            playerScore += 1
            return("You win! Rock breaks scissors!")
        }
}
}
}
console.log(playRound())
// console.log(playerScore)
}

// Play game best-of-5

game()
game()
game()
game()
game()

// Create end messages
winMessage = "Yippee! You won " + playerScore + " out of 5 games! You are the winner!"
loseMessage = "You only won " + playerScore + " out of 5 games. The computer won."


// Announce end messages
function score() {
if (playerScore >= 3) {
    return(winMessage)
} else {
    return(loseMessage)
}
}
console.log(score())