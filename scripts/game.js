"use strict";

const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor( Math.random() * 3 )];
}

function getHumanChoice() {
    let choice = Number(prompt("Enter your choice:\n(1)Rock\n(2)Paper\n(3)Scissor")) - 1;
    return CHOICES[choice];
}

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