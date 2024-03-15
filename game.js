/*
Game of rock scisors and paper against PC 
Choices for PC will be randomly generate
We ask user for his/her choice
We are going to paly 5 games and decide who wins
*/

//Generate random choice for pc
// FUNCTION getComputerChoice
    // Generate random number from 0 to 2 and save it it variable computerChoice
    // create variable name choices of type array [rock, paper, scisors]
    // return string from choices based on generated number

//Get choice from user
// FUNCTION getUserChoice
    // set variable userChoice of type string
    // ask user for choice from rock, paper scisors
    // convert userChoice to lower case
    // return userChoice

//Play one round
// FUNCTION playRound(getComputerChoice, getUserChoice)
    // set compcuterChoice to returned value from getCompcuterChoice
    // set userChoice to returned value from getUserChoice
    // set getUserPoint boolean value to false
    // set getPcPoint boolean value to false
    // compare user and pc choices
        // if they are same set getUserPoint and getPcPoint to true and return string -> Is a tie! compcuterChoice vs userChoice 
        // if computerChoice is rock and userChoice scisors
            // set getPcPoint to true and return string -> compture wins! computerChoice beats userChoice
        // else
            // set getUserPoint to true and return string -> user wins! userChoice beats computerChoice

// TODO --> Repair this logic 

        // if computerChoice is paper and userChoice is rock
            // set getPcPoint to true
        // if computerChoice is scissors and userChoice is paper
            // set getPcPoint to true
        // else
            // set getUserPoint to true
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