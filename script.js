"use strict"
const choices = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    let humanChoice = prompt("Enter one of: " + choices)
    return humanChoice
}