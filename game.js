 
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
console.log(getComputerChoice())