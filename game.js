/*
Game of rock scisors and paper against PC 
Choices for PC will be randomly generate
We ask user for his/her choice
We are going to paly 5 games and decide who wins
*/

//Generate random choice for pc
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[computerChoice];
}




//Get choice from user
function getUserChoice(e) {
    console.log(e.target.textContent.toLowerCase());
    return e.target.textContent.toLowerCase();
}



//Play one round
function playRound() {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    // message user what choose he and what choose PC
    console.log("You choose " + userChoice);
    console.log("PC choose " + computerChoice);

    // variables for tracking who wins this round
    let winUser = false;
    let winPc = false;


    function pcWin() {
        winPc = true;
        console.log("Computer Wins! " + computerChoice + " beats " + userChoice);
    }

    function userWin() {
        winUser = true;
        console.log("User Wins! " + userChoice + " beats " + computerChoice);
    }

    // compare user and pc choices
    if (userChoice === computerChoice) {
        winUser = true;
        winPc = true;
        console.log("It is a tie! User choice: " +
            userChoice +
            " vs Computer choice: "
            + computerChoice);
    } else if (computerChoice === "rock") {
        if (userChoice === "scissors") {
            pcWin();
        } else {
            userWin();
        }
    } else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            pcWin();
        } else {
            userWin();
        }
    } else if (computerChoice === "scissors") {
        if (userChoice === "paper") {
            pcWin();
        } else {
            userWin();
        }
    }

    return [winUser, winPc];
}


//play the game
function playGame() {
    // sentry variable for while loop
    let gamesPlayed = 0;

    // variables for score count
    let userPointCount = 0;
    let pcPointCount = 0;

    // while (gamesPlayed < 5) {
    //     const [winUser, winPc] = playRound();

    //     if (winUser && winPc) {
    //         userPointCount += 1;
    //         pcPointCount += 1;
    //     } else if (winUser) {
    //         userPointCount += 1;
    //     } else if (winPc) {
    //         pcPointCount += 1;
    //     }
    //     console.log("user point: " + userPointCount);
    //     console.log("pc point: " + pcPointCount);
    //     console.log("------------------------\nEnd of round " +
    //         (gamesPlayed + 1) +
    //         "\n------------------------");
    //     gamesPlayed++;
    // }
    console.log("****************************");
    console.log("MATCH RESULT");
    console.log("****************************");
    if (userPointCount > pcPointCount) {
        console.log("Congratulation You WIN!!!!");
    } else if (pcPointCount > userPointCount) {
        console.log("Sorry! PC win this game!");
    } else {
        console.log("It is DRAW!");
    }

}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", getUserChoice);
paperBtn.addEventListener("click", getUserChoice);
scissorsBtn.addEventListener("click", getUserChoice);