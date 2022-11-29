// Pseudocode:
// create a function named getComputerChoice 
// set a variable with the choices of the game outside of the function
// create a Math.floor(Math.random()) of the length of the variable for the choices
// 

const gameMoveChoices = ["rock", "paper", "scissors"]

const getComputerChoice = () => {
const randomRoll = Math.floor(Math.random() * gameMoveChoices.length)
  return gameMoveChoices[randomRoll]
}
console.log(getComputerChoice())