// Pseudocode:
// create a function named getComputerChoice 
// set a variable with the choices of the game outside of the function
// create a Math.floor(Math.random()) of the length of the variable for the choices and set it to a variable 
// return the gameMoveChoices with the randomRoll in brackets because it's an array

const gameMoveChoices = ["rock", "paper", "scissors"]

const getComputerChoice = () => {
const randomRoll = Math.floor(Math.random() * gameMoveChoices.length)
  return gameMoveChoices[randomRoll]
}

// Pseudocode:
// create a function named singleRound that takes in two parameters (playerSelection, computerSelection)
// create a conditional statement going over each scenario and returning the winner or loser 

const singleRound = (playerSelection, computerSelection) => {
  if (playerSelection === gameMoveChoices[0] && computerSelection === gameMoveChoices[2]) {
    return "Rock beats scissors! You win!"
  } else if (playerSelection === gameMoveChoices[1] && computerSelection === gameMoveChoices[0]) {
    return "Paper beats rock! You win!"
  } else if (playerSelection === gameMoveChoices[2] && computerSelection === gameMoveChoices[1]) {
    return "Scissors beats paper! You win"
  } else {
    "error"
  }
}
