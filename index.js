let userScore = 0
let computerScore = 0
const userSpan = document.getElementById('user-score')
const computerSpan = document.getElementById('computer-score')
const rock = document.getElementById('rock-choice')
const paper = document.getElementById('paper-choice')
const scissors = document.getElementById('scissors-choice')
const subtitle = document.getElementById('explanation')
const result = document.getElementById('result')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const i = Math.floor(Math.random() * 3)
    return choices[i]
}

function decision(userChoice) {
    const computerChoice = getComputerChoice()
    console.log('Computer: ' + computerChoice)
    console.log('User: ' + userChoice)
    //Computer Switch
    switch (`${computerChoice} vs ${userChoice}`) {
        case 'rock vs scissors':
            changeComputerUI()
            result.textContent = `You lose a point, computer chose rock this time.`
            console.log('COMPUTER Won')
            break;
        case 'paper vs rock':
            changeComputerUI()
            result.textContent = `Try again, paper covers your rock.`
            console.log('COMPUTER Won')
            break;
        case 'scissors vs paper':
            changeComputerUI()
            result.textContent = `Bad luck, computer put out scissors!`
            console.log('COMPUTER Won')
            break;
    }
    //User Switch
    switch (`${userChoice} vs ${computerChoice}`) {
        case 'rock vs scissors':
            changeUserUI()
            result.textContent = 'Rock beats scissors! You get a point'
            console.log('USER Won')
            break;
        case 'paper vs rock':
            changeUserUI()
            result.textContent = 'Paper covers rock! You get a point'
            console.log('USER Won')
            break;
        case 'scissors vs paper':
            changeUserUI()
            result.textContent = 'Scissors cut through paper! You get a point'
            console.log('USER Won')
            break;
    }
    //Draw Switch
    switch (`${userChoice} vs ${computerChoice}`) {
        case 'rock vs rock':
            result.textContent = `It's a draw`
            console.log('DRAW')
            break;
        case 'paper vs paper':
            result.textContent = `It's a draw`
            console.log('DRAW')
            break;
        case 'scissors vs SCISSORS':
            result.textContent = `It's a draw`
            console.log('DRAW')
            break;
    }
}

function changeComputerUI() {
    computerScore += 1
    computerSpan.textContent = computerScore.toString();
}

function changeUserUI() {
    userScore += 1
    userSpan.textContent = userScore.toString();
}

function eventListeners() {
    rock.addEventListener('click', () => {
        decision(`rock`)
    })
    paper.addEventListener('click', () => {
        decision(`paper`)
    })
    scissors.addEventListener('click', () => {
        decision(`scissors`)
    })
}

eventListeners()