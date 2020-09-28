import { newLetters, createBoxes } from './utils.js'

const button = document.querySelector('#button-start')
const caption = document.querySelector('#caption')
const gameWindow = document.querySelector('#game-window')

let gameStarted = false

let letters = []

// start the game
button.addEventListener('click', () => startGame())

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) startGame() 

    if (gameStarted) pressLetters(e.key, letters)

})

function startGame() {

    // generate new letters
    letters = newLetters(2)

    // display boxes
    createBoxes(letters, gameWindow)
    
    // set the state
    gameStarted = true

    button.disabled = true
    
    caption.innerHTML = 'Press the first letter on the keyboard'

}

function pressLetters(key, letters) {

    // remove the letter    
    if (key === letters[0]) {

        letters.shift()

        const firstLetter = document.querySelector('.box:first-of-type')

        gameWindow.removeChild(firstLetter)

    }

    // game over
    if (letters.length === 0) {

        // reset the state
        gameStarted = false

        button.disabled = false

        caption.innerHTML = 'Well done!'

    }

}