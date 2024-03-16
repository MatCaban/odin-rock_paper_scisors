/*
Game of rock scisors and paper against PC 
Choices for PC will be randomly generate
We ask user for his/her choice
We are going to paly 5 games and decide who wins
*/

//Generate random choice for pc
// FUNCTION getComputerChoice
function getComputerChoice() {
    // Generate random number from 0 to 2 and save it it variable computerChoice
    const computerChoice = Math.floor(Math.random() * 3);

    // create variable name choices of type array [rock, paper, scissors]
    const choices = ["rock", "paper", "scissors"];

    // return string from choices based on generated number
    return choices[computerChoice];
}

    


//Get choice from user
// FUNCTION getUserChoice
function getUserChoice(){
    // set variable userChoice of type string, ask user for choice from rock, paper scisors
    let userChoice = prompt("Choose one:\nrock\npaper\nscissors");

    // convert userChoice to lower case
    userChoice = userChoice.toLowerCase();
    
    // return userChoice
    return userChoice;
}



//Play one round
// FUNCTION playRound(getComputerChoice, getUserChoice)
    // set compcuterChoice to returned value from getCompcuterChoice
    // set userChoice to returned value from getUserChoice
    // set getUserPoint boolean value to false
    // set getPcPoint boolean value to false

    // helper functions:
    // FUNCTION pcWin
        // set getPcPoint to true and return string -> compture wins! computerChoice beats userChoice
    // FUNCTION userWin
        // set getUserPoint to true and return string -> user wins! userChoice beats computerChoice


    // compare user and pc choices
        // if they are same set getUserPoint and getPcPoint to true and return string -> Is a tie! compcuterChoice vs userChoice 
        // if computerChoice is rock 
            // ifuserChoice scisors
                // pcWin
            // else
                // userWin

 

        // if computerChoice is paper 
            // if userChoice is rock
                // pcWin             
            // else
                // userWin

              
        // if computerChoice is scissors 
            //if userChoice is paper
                // pcWin
            // else
                // userWin
    // return getUserPoint and getPcPoint as array

//play the game
// FUNCTION playGame
    // set variable gamesPlayed to 0, this is our sentry variable
    // set userPointCount variable to 0 
    // set pcPointCount variable to 0
    // WHILE gamesPlayed is less than 5
        // save values returned from CALL playRound(getComputerChoice, getUserChoice) into variables getUserPoint and getPcPoint
        // if both getUserPoint and getPcPoint are true
            // set userPointCount and pcPointCount plus 1
        // else if getUserPoint is true
            // set userPointCount plus 1
        // else
            // set pcPointCount plus1

    // Decide who win
    // if userPoincCount is more than pcPointCount
        // pc win
    // else if pcPointCount si more than userPointCount
        // user win
    // else
        // draw