function getComputerChoice() {
    let compt_choice = Math.floor(Math.random() * 3);
    switch(compt_choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
console.log(getComputerChoice());