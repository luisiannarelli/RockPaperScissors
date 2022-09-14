function getComputerChoice() {
    let CChoice = Math.floor(Math.random()*3);
    
    if (CChoice == 0) {
        CChoice = "Rock";
    } else if (CChoice == 1)  {
        CChoice = "Paper";
    } else {
        CChoice = "Scissors";
    }
    console.log(`The computer choise is ${CChoice}`);
    return CChoice;
}



function getPlayerSelection () {
    let PChoice = prompt("cual es tu eleccion?");
    capitalize(PChoice);
    PChoice = output;
    return PChoice;
}



function playRound (playerSelection, computerSelection) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

playRound();




function capitalize(input) {
    input = input.toLowerCase();
    firstletter = (input.slice(0,1).toUpperCase());
    output = input.replace(input.slice(0,1), firstletter);
    return output;
}

  

