// Pseudocode:
// create a function named getComputerChoice 
// set a variable with the choices of the game
// create a Math.random() of the length of the variable for the choices
// return the variable name 

const getComputerChoice = () => {
  const gameMoveChoices = ["rock", "paper", "scissors"]
    Math.floor(Math.random() * gameMoveChoices.length)
  return gameMoveChoices
}
console.log(getComputerChoice(gameMoveChoices))