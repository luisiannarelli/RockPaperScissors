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

const PlayerChoice = getPlayerSelection();
const ComputerChoice = getComputerChoice();



function playround() {
    console.log(`The player chose ${PlayerChoice}`);
    let Pwin = false;
    let Cwin = false;
    let Tie = false;
    
    
    if (PlayerChoice == ComputerChoice) {
        console.log("This round is a Tie");
        Tie = true;
    } else if (PlayerChoice == "Rock" && ComputerChoice == "Paper"){
        console.log("This round is for the Computer");
        Cwin = true;
        return Cwin;
    } else if (PlayerChoice == "Rock" && ComputerChoice == "Scissors"){
        console.log("This round is for the Player");
        Pwin = true;
        return Pwin;
    } else if (PlayerChoice == "Paper" && ComputerChoice == "Rock"){
        console.log("This round is for the Player");
        Pwin = true;
        return Pwin;
    } else if (PlayerChoice == "Paper" && ComputerChoice == "Scissors"){
        console.log("This round is for the Computer");
        Cwin = true;
        return Cwin;
    } else if (PlayerChoice == "Scissors" && ComputerChoice == "Rock"){
        console.log("This round is for the Computer");
        Cwin = true;
        return Cwin;
    } else if (PlayerChoice == "Scissors" && ComputerChoice == "Paper"){
        console.log("This round is for the Player");
        Pwin = true;
        return Pwin;
    } 

    return Pwin;
    return Cwin;
    return Tie;

}



function game(){
    let CP = 0;
    let CC = 0;
    let CT = 0;

    for (let i=0; i<5; i++){
        playround();
        if (Cwin == true){
            CC = CC++;
        }else if (Pwin == true) {
            CP = CP++;
        } else {
            CT = CT++;
        }
    }
}
game();

function capitalize(input) {
    input = input.toLowerCase();
    firstletter = (input.slice(0,1).toUpperCase());
    output = input.replace(input.slice(0,1), firstletter);
    return output;
}

  

