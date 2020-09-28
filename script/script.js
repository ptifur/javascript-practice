import { newLetters, createBoxes } from './utils.js'
import { pressLetters } from './pressletters.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

let gameStarted = false

let letters = []

// start the game
button.addEventListener('click', () => startGame())

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) startGame() 

    if (gameStarted) {

        gameStarted = pressLetters(e.key, letters, gameStarted)

    } 

})

function startGame() {

    // generate new letters
    letters = newLetters(2)

    // display boxes
    createBoxes(letters, game)
    
    // set the state
    gameStarted = true

    button.disabled = true
    
    caption.innerHTML = 'Press the first letter on the keyboard'

}