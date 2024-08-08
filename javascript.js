let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Your choice: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Tie!");
            }
            else if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("You win! Rock beats Scissors");
            }
            else if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats Rock");
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("Tie!");
            }
            else if (computerChoice === "rock") {
                humanScore += 1;
                console.log("You win! Paper beats Rock");
            }
            else if (computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats Paper");
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("Tie!");
            }
            else if (computerChoice === "paper") {
                humanScore += 1;
                console.log("You win! Scissors beats Paper");
            }
            else if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose! Rock beats Scissors");
            }
            break;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

