//FUNCTIONS

function getComputerChoice() {
    let computerChoice;
    switch(generateRandomInteger(3)) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    let wi = getWinner(playerSelection, computerSelection)
    if (wi == "player") {
        playerScore += 1
    }
    else if (wi == "comp") {
        computerScore += 1
    }
    if (r < 4) {
    let winStatement;
    console.log(playerSelection)
    console.log(computerSelection)

    playerSelection = playerSelection.toLowerCase()

    results = getWinner(playerSelection, computerSelection)

    if (results == "player") {
        winStatement = `You Won! ${playerSelection} beats ${computerSelection}`
    }
    else if (results == "comp") {
        winStatement = `You Lost! ${computerSelection} beats ${playerSelection}`
    }
    else if (results == "tie") {
        winStatement = `It's a tie! You both chose ${playerSelection}`
    }
    console.log(winStatement)
    winAnnouncer.textContent = winStatement
}
    else if (r == 4) {
        playerSelection = playerSelection.toLowerCase()

        results = getWinner(playerSelection, computerSelection)
    
        if (results == "player") {
            winStatement = `You Won! ${playerSelection} beats ${computerSelection}`
        }
        else if (results == "comp") {
            winStatement = `You Lost! ${computerSelection} beats ${playerSelection}`
        }
        else if (results == "tie") {
            winStatement = `It's a tie! You both chose ${playerSelection}`
        }
        console.log(winStatement)
        winAnnouncer.textContent = winStatement
    
        kill()
        if (playerScore > computerScore) {
            finalA.style.color = "#7DCE13"
            finalA.textContent = `You Won! You beat the computer ${playerScore} to ${computerScore}`

            }
            else if (playerScore < computerScore) {
                finalA.style.color = "red"
                finalA.textContent = `You Lost! The computer beat you ${computerScore} to ${playerScore}`
            }
            else {
                finalA.style.color = "black"
                finalA.textContent =`It's a tie! You both finished with a score of ${playerScore}`
            }

    
    // return winStatement
}
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
function kill() {
btnRock.removeEventListener('click', playRoundForRock)
btnPaper.removeEventListener('click',playRoundForPaper)
btnScissors.removeEventListener('click', playRoundForScissor)
}

function getWinner(playerChoice, computerChoice) {
    let whoWon;

    if (playerChoice == "rock") {
        switch(computerChoice) {
            case "rock":
                whoWon = "tie"
                break
            case "paper":
                whoWon = "comp"
                break
            case "scissors":
                whoWon = "player"
                break
        }
    }
    else if (playerChoice == "paper") {
        switch(computerChoice) {
            case "rock":
                whoWon = "player"
                break
            case "paper":
                whoWon = "tie"
                break
            case "scissors":
                whoWon = "comp"
                break
        }
    }
    else if (playerChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                whoWon = "comp"
                break
            case "paper":
                whoWon = "player"
                break
            case "scissors":
                whoWon = "tie"
                break
        }
    }
    return whoWon
}

const playRoundForRock = () => {
    let cuss = getComputerChoice()
   
    playRound('rock', cuss)
   
    
    r += 1
}
const playRoundForPaper = () => {
    let cuss = getComputerChoice()

    playRound('paper', cuss)
    
    r += 1
    
}
const playRoundForScissor = () => {
    let cuss = getComputerChoice()
  
    playRound('scissors', cuss)
    
    r += 1
}

//GETTING THE ELEMENTS
let playerScore = 0;
let computerScore = 0;
const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const winAnnouncer = document.querySelector('#turnScore')
const finalA = document.querySelector('#final')

//ADDING EVENT LISTENERS

btnRock.addEventListener('click', playRoundForRock)
btnPaper.addEventListener('click',playRoundForPaper)
btnScissors.addEventListener('click', playRoundForScissor)

//MOVING ON
let r = 0;

