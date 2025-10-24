"use strict"
const choices = ["rock", "paper", "scissors"]
const numRounds = 5
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
    if (playerChoice == computerChoice) {
        message.textContent = "TIE: both played " + playerChoice
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        message.textContent = "WIN: your " + playerChoice + " beats the computer's " + computerChoice
        playerScore++
    } else {
        message.textContent = "LOSE: the computer's " + computerChoice + " beats your " + playerChoice
        computerScore++
    }
    playerScoreDisplay.textContent = playerScore
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