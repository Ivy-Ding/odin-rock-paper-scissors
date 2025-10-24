"use strict"
const choices = ["rock", "paper", "scissors"]
const numRounds = 5
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (humanChoice == computerChoice) {
        message.textContent = "TIE: both played " + humanChoice
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        message.textContent = "WIN: your " + humanChoice + " beats the computer's " + computerChoice
        humanScore++
    } else {
        message.textContent = "LOSE: the computer's " + computerChoice + " beats your " + humanChoice
        computerScore++
    }
    playerScoreDisplay.textContent = humanScore
    computerScoreDisplay.textContent = computerScore
}

// add event listeners for the buttons
const rockButton = document.querySelector("#rock-button")
const paperButton = document.querySelector("#paper-button")
const scissorsButton = document.querySelector("#scissors-button")

rockButton.addEventListener("click", () => playRound(choices[0]))
paperButton.addEventListener("click", () => playRound(choices[1]))
scissorsButton.addEventListener("click", () => playRound(choices[2]))

// get result DOMs
const message = document.querySelector("#message")
const playerScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")