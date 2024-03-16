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
// FUNCTION playRound()
function playRound(){
    // set computerChoice to returned value from getCompcuterChoice
    const computerChoice = getComputerChoice();
    
    // set userChoice to returned value from getUserChoice
    const userChoice = getUserChoice();

    // message user what choose he and what choose PC
    console.log("You choose " + userChoice);
    console.log("PC choose " + computerChoice);

    // set getUserPoint boolean value to false
    let getUserPoint = false;
     
    // set getPcPoint boolean value to false
    let getPcPoint = false;

    // helper functions:
    // FUNCTION pcWin
    function pcWin(){
        // set getPcPoint to true and return string -> compture wins! computerChoice beats userChoice
        getPcPoint = true;
        console.log("Computer Wins! " + computerChoice + " beats " + userChoice);
    }

    
    // FUNCTION userWin
    function userWin(){
        // set getUserPoint to true and return string -> user wins! userChoice beats computerChoice
        getUserPoint = true;
        console.log("User Wins! " + userChoice + " beats " + computerChoice);
    }
    
    // compare user and pc choices
    // if they are same set getUserPoint and getPcPoint to true and return string -> Is a tie! compcuterChoice vs userChoice
    if(userChoice === computerChoice){
        getUserPoint = true;
        getPcPoint = true;
        console.log("It is a tie! User choice: " + userChoice + " vs Computer choice: " + computerChoice);
    } 
    // if computerChoice is rock
    else if(computerChoice === "rock"){
        // if userChoice scisors
        if(userChoice === "scissors"){
            // pcWin
            pcWin();
        } else {
            // userWin
            userWin();
        }
    }
 

    // if computerChoice is paper
    else if(computerChoice === "paper"){ 
        // if userChoice is rock
        if(userChoice === "rock"){    
            //pcWin
            pcWin();
        } else {             
            // userWin
            userWin();
    }
    }
              
    // if computerChoice is scissors
    else if (computerChoice === "scissors") {
        //if userChoice is paper
        if(userChoice === "paper"){
            // pcWin
            pcWin();
        } else {
            // userWin
            userWin();
        }    
    } 
        
    // return getUserPoint and getPcPoint as array
    return [getUserPoint, getPcPoint];
}


//play the game
// FUNCTION playGame
function playGame(){
    // set variable gamesPlayed to 0, this is our sentry variable
    let gamesPlayed = 0;

    // set userPointCount variable to 0 
    let userPointCount = 0;

    // set pcPointCount variable to 0
    let pcPointCount = 0;
     
    // WHILE gamesPlayed is less than 5
    while(gamesPlayed < 5){
        // save values returned from CALL playRound() into variables getUserPoint and getPcPoint
        const [getUserPoint, getPcPoint] = playRound();
        
        // if both getUserPoint and getPcPoint are true
        if(getUserPoint && getPcPoint){
            // set userPointCount and pcPointCount plus 1
            userPointCount += 1;
            pcPointCount += 1;
        } else if(getUserPoint){
        // else if getUserPoint is true
            // set userPointCount plus 1
            userPointCount += 1;
        } else if(getPcPoint){
            // set pcPointCount plus1
            pcPointCount += 1;
        }
        console.log("user point: " + userPointCount);
        console.log("pc point: " + pcPointCount);
        console.log("------------------------\nEnd of round " + (gamesPlayed + 1) + "\n------------------------");
        gamesPlayed++;
    }
    // Decide who win
    // if userPoincCount is more than pcPointCount
        // pc win
    // else if pcPointCount si more than userPointCount
        // user win
    // else
        // draw

}

playGame();