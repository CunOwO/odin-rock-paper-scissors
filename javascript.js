let humanScore = 0;
let computerScore = 0;

const gameScore = document.querySelector("#gameScore");
const gameStatus = document.querySelector("#gameStatus");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playGame);
});

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

function playGame(e) {
    const humanSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 

    gameScore.textContent = `Score: ${humanScore} - ${computerScore}`;
    if (humanScore === 5) {
        gameScore.textContent = "";
        gameStatus.textContent = "";
        alert(`You win! Your score: ${humanScore} - ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        gameScore.textContent = "";
        gameStatus.textContent = "";
        alert(`You lose... Your score: ${humanScore} - ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                gameStatus.textContent = "Tie!";
            }
            else if (computerChoice === "scissors") {
                humanScore += 1;
                gameStatus.textContent = "You win! Rock beats Scissors";
            }
            else if (computerChoice === "paper") {
                computerScore += 1;
                gameStatus.textContent = "You lose! Paper beats Rock";
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                gameStatus.textContent = "Tie!";
            }
            else if (computerChoice === "rock") {
                humanScore += 1;
                gameStatus.textContent = "You win! Paper beats Rock";
            }
            else if (computerChoice === "scissors") {
                computerScore += 1;
                gameStatus.textContent = "You lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                gameStatus.textContent = "Tie!";
            }
            else if (computerChoice === "paper") {
                humanScore += 1;
                gameStatus.textContent = "You win! Scissors beats Paper";
            }
            else if (computerChoice === "rock") {
                computerScore += 1;
                gameStatus.textContent = "You lose! Rock beats Scissors";
            }
            break;
    }
}