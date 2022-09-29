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


function playround() {
    
    const PlayerChoice = getPlayerSelection();
    const ComputerChoice = getComputerChoice();
    
    console.log(`The player chose ${PlayerChoice}`);

    let Winner = 0;
    
    if (PlayerChoice == ComputerChoice) {
        console.log("This round is a Tie");
        

    } else if (PlayerChoice == "Rock" && ComputerChoice == "Paper"){
        console.log("This round is for the Computer");
        Winner = "Computer";
                
    } else if (PlayerChoice == "Rock" && ComputerChoice == "Scissors"){
        console.log("This round is for the Player");
        Winner = "Player";
        
    } else if (PlayerChoice == "Paper" && ComputerChoice == "Rock"){
        console.log("This round is for the Player");
        Winner = "Player";
        
    } else if (PlayerChoice == "Paper" && ComputerChoice == "Scissors"){
        console.log("This round is for the Computer");
        Winner = "Computer";
        
    } else if (PlayerChoice == "Scissors" && ComputerChoice == "Rock"){
        console.log("This round is for the Computer");
        Winner = "Computer";
        
    } else if (PlayerChoice == "Scissors" && ComputerChoice == "Paper"){
        console.log("This round is for the Player");
        Winner = "Player";
        
    }
    return Winner
}



function game(){

    let CP = 0;
    let CC = 0;

    for (let i=0; i<5; i++){
        const Win = playround();
        
        
        if (Win == "Player") {
            CP++;

        }else if (Win == "Computer") {
            CC++;
        }
        
    }
    
    if (CP>CC)  {
        console.log("The Winner is the Player");
    } else if (CP<CC) {
        console.log("The Winner is the Computer");
    } else {
        console.log("It's a Tie");
    }

    console.log(`The count is this one: The computer won ${CC} times, the player ${CP}`);
}

game();



function capitalize(input) {
    input = input.toLowerCase();
    firstletter = (input.slice(0,1).toUpperCase());
    output = input.replace(input.slice(0,1), firstletter);
    return output;
}

  

