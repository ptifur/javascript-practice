import { newLetters, createBoxes } from './utils.js'
import { pressLetters } from './pressletters.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

let gameStarted = false

let letters = []

// start the game
// button.addEventListener('click', () => startGame())

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) {

        displayBoxes()

        setTheUI()

    } 

    if (gameStarted) {

        gameStarted = pressLetters(e.key, letters, gameStarted)

    } 

})

function displayBoxes() {

    // generate new letters
    letters = newLetters(2)

    // display boxes
    createBoxes(letters, game)

}

function setTheUI() {

    // set the state
    gameStarted = true

    button.disabled = true
    
    caption.innerHTML = 'Press the first letter on the keyboard'

}