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



let userChoice;
//Get choice from user
function getUserChoice(e) {
    userChoice = e.target.textContent.toLowerCase();
    playGame();
}



//Play one round
function playRound() {
    //To delete result div content
    resultDiv.textContent = "";

    const computerChoice = getComputerChoice();


    // message user what choose he and what choose PC
    const userChooseText = "You choose " + userChoice;
    const pcChooseText = "PC choose " + computerChoice;
    createPara(userChooseText);
    createPara(pcChooseText);

    // variables for tracking who wins this round
    let winUser = false;
    let winPc = false;


    function pcWin() {
        winPc = true;
        winPcText = "Computer Wins! " + computerChoice + " beats " + userChoice;
        createPara(winPcText);
    }

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
        createPara(resultText1);
        createPara(resultText2);
        createPara(resultText3);
        createPara(userPointText);
        createPara(pcPointText);
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
        //reset "game"
        userPointCount = 0;
        pcPointCount = 0;
        gamesPlayed = 0;
    }


}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playBtn = document.querySelector("#play");
const resultDiv = document.querySelector("#resultsText")

rockBtn.addEventListener("click", getUserChoice);
paperBtn.addEventListener("click", getUserChoice);
scissorsBtn.addEventListener("click", getUserChoice);

const createPara = text => {
    const para = document.createElement("p");
    para.textContent = text;
    resultDiv.appendChild(para);
}
