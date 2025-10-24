"use strict"
const choices = ["rock", "paper", "scissors"]
const numRounds = 5
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    let humanChoice = prompt("Enter one of: " + choices).toLowerCase()
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("TIE: both played " + humanChoice)
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("WIN: your " + humanChoice + " beats the computer's " + computerChoice)
        humanScore++
    } else {
        console.log("LOSE: the computer's " + computerChoice + " beats your " + humanChoice)
        computerScore++
    }
}

function game(numRounds = 5) {
    for (let i = 0; i < numRounds; i++) {
        console.log("Round " + i)
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Your score: " + humanScore)
    console.log("Computer's Score: " + computerScore)
}

game(5)