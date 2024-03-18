/*
Game of rock scisors and paper against PC 
Choices for PC will be randomly generate
We ask user for his/her choice
We are going to paly until someone has score 5 points
*/

// Function to generate a random choice for the computer
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[computerChoice];
}



let userChoice;
// Function to get the user's choice and start the game
function getUserChoice(e) {
    userChoice = e.target.textContent.toLowerCase();
    playGame();
}



// Function to play one round of the game
function playRound() {
    // Clear the results from the previous round
    resultDiv.textContent = "";

    const computerChoice = getComputerChoice();


    // Display the choices made by the user and the computer
    const userChooseText = "You choose " + userChoice;
    const pcChooseText = "PC choose " + computerChoice;
    createPara(userChooseText);
    createPara(pcChooseText);

    // variables for tracking who wins this round
    let winUser = false;
    let winPc = false;

    // Function to handle the case where the computer wins
    function pcWin() {
        winPc = true;
        winPcText = "Computer Wins! " + computerChoice + " beats " + userChoice;
        createPara(winPcText);
    }

        // Function to handle the case where the user wins
    function userWin() {
        winUser = true;
        winUserText = "User Wins! " + userChoice + " beats " + computerChoice;
        createPara(winUserText);
    }

    // compare user and pc choices
    if (userChoice === computerChoice) {
        winUser = true;
        winPc = true;
        const isItTieText = "It is a tie! User choice: " +
            userChoice +
            " vs Computer choice: "
            + computerChoice;
        createPara(isItTieText);
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

// Variables to track the points for the user and the computer, and the number of games played
let userPointCount = 0;
let pcPointCount = 0;
let gamesPlayed = 0;

//play the game
function playGame() {


    const [winUser, winPc] = playRound();

    if (winUser && winPc) {
        userPointCount += 1;
        pcPointCount += 1;
    } else if (winUser) {
        userPointCount += 1;
    } else if (winPc) {
        pcPointCount += 1;
    }
    const userPointText = "user point: " + userPointCount;
    createPara(userPointText);
    const pcPointText = "pc point: " + pcPointCount;
    createPara(pcPointText);
    const endOfRoundText = "------------------------\nEnd of round " +
        (gamesPlayed + 1) +
        "\n------------------------";
    createPara(endOfRoundText);
    gamesPlayed++;

    if (userPointCount >= 5 || pcPointCount >= 5) {
        resultDiv.textContent = "";
        resultText1 = "****************************";
        resultText2 = "MATCH Result";
        resultText3 = "****************************";
        // Display the end of match separator
        createPara(resultText1);
        createPara(resultText2);
        createPara(resultText3);

        // Display the final scores
        createPara(userPointText);
        createPara(pcPointText);

        // Determine and display the winner

        if (userPointCount > pcPointCount) {
            const youWin = "Congratulation You WIN!!!!";
            createPara(youWin);
        } else if (pcPointCount > userPointCount) {
            const pcWin = "Sorry! PC win this game!";
            createPara(pcWin);
        } else {
            const itsDraw = "It is DRAW!";
            createPara(itsDraw);
        }
        // Reset the game for the next match
        userPointCount = 0;
        pcPointCount = 0;
        gamesPlayed = 0;
    }


}
// Get the buttons for the user's choices
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Get the div to display the results
const resultDiv = document.querySelector("#resultsText");

// Add event listeners to the buttons to get the user's choice when clicked
rockBtn.addEventListener("click", getUserChoice);
paperBtn.addEventListener("click", getUserChoice);
scissorsBtn.addEventListener("click", getUserChoice);

// Function to create a new paragraph with the given text and add it to the results div
const createPara = text => {
    const para = document.createElement("p");
    para.textContent = text;
    resultDiv.appendChild(para);
}
