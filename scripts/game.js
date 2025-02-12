"use strict";

const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const runningResult = document.querySelector("#running-result");
const gameResult = document.querySelector("#game-result");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);

function getComputerChoice() {
    return CHOICES[Math.floor( Math.random() * 3 )];
}

function getHumanChoice(event) {
    return event.currentTarget.innerText.toLowerCase();
}

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) roundResult.textContent = `it's a draw: ${humanChoice} vs ${computerChoice}`;
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        roundResult.textContent = `You win: ${humanChoice} vs ${computerChoice}`;
        humanScore++;
    }
    else {
        roundResult.textContent = `You lose: ${humanChoice} vs ${computerChoice}`;
        computerScore++;
    }
    runningResult.textContent = `Player ${humanScore} vs ${computerScore} Computer`
    if (humanScore === 5) gameResult.textContent = "PLAYER WINS!!!";
    if (computerScore === 5) gameResult.textContent = "COMPUTER WINS, GOOD LUCK NEXT TIME";
}












function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) console.log(`it's a draw: ${humanChoice} vs ${computerChoice}`);
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) {
            console.log(`You win: ${humanChoice} vs ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose: ${humanChoice} vs ${computerChoice}`);
            computerScore++;
        }
    }

    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Game Result:\n----- Player ${humanScore} vs ${computerScore} Computer -----`)
}
