import { pressLetters } from './pressLetters.js'
import { displayBoxes } from './displayBoxes.js'
import { setTheUI } from './setTheUI.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

let gameStarted = false

let letters = []

// start the game
button.addEventListener('click', () => {

    letters = displayBoxes(letters)

    gameStarted = setTheUI(gameStarted)

})

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) {

        letters = displayBoxes(letters)

        gameStarted = setTheUI(gameStarted)

    } 

    if (gameStarted) {

        gameStarted = pressLetters(e.key, letters, gameStarted)

    } 

})