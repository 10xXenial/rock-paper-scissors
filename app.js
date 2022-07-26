//FUNCTIONS!

//function to get a random choice

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
            computerChoice = "scissor"
            break;
    }
    return computerChoice
}

//function to decide who wins

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
            case "scissor":
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
            case "scissor":
                whoWon = "comp"
                break
        }
    }
    else if (playerChoice == "scissor") {
        switch(computerChoice) {
            case "rock":
                whoWon = "comp"
                break
            case "paper":
                whoWon = "player"
                break
            case "scissor":
                whoWon = "tie"
                break
        }
    }
    return whoWon
}

//function to generate random integer

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

//function to play a round

function playRound(playerSelection, computerSelection) {

    let winStatement;

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
    return winStatement
}


//the hardest of them all! the game() function which I just can't figure out!

// function game() {
    // let playerScore = 0
    // let compScore = 0
    // for (let round = 0; round < 5; round++) {
    //     const pchoice = prompt("What shall you choose?").toLowerCase()
    //     const cchoice = getComputerChoice()
    //     roundResult = getWinner(pchoice, cchoice)
    //     if (roundResult == "player") {
    //         playerScore += 1
    //     }
    //     else if (roundResult == "comp") {
    //         compScore += 1
    //     }
    //     winStatement = playRound(pchoice, cchoice)
    //     console.log(winStatement)
    
    // if (playerScore > compScore) {
    //     console.log(`You Won! You beat the computer ${playerScore} to ${compScore}`)
    // }
    // else if (playerScore < compScore) {
    //     console.log(`You Lost! The computer beat you ${compScore} to ${playerScore}`)
    // }
    // else {
    //     console.log(`It's a tie! You both finished with a score of ${playerScore}`)
    // }

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const winAnnouncer = document.querySelector('div')

function click (btnN) {
    const pchoice = btnN
    const cchoice = getComputerChoice()
    const winstate = playRound(pchoice, cchoice)
    const winner = getWinner()
    winAnnouncer.textContent = winstate
}
let timesPlayed = 0;
while (timesPlayed <= 5) {
    btnRock.addEventListener('click', () => {
        let buttonChosen = 'rock'
        click(buttonChosen)
        timesPlayed++
    } )
    btnPaper.addEventListener('click', () => {
        let buttonChosen = 'paper'
        click(buttonChosen)
        timesPlayed++
    } )
    btnScissors.addEventListener('click', () => {
        let buttonChosen = 'scissor'
        click(buttonChosen)
        timesPlayed++
    } )
}


//I am freaking so happy! I finally got this code right! that's the beauty of coding!
//FUTURE ME: DAMN! THIS JS IS REALLY FRICKIN' GETTTING TO ME!