import { pressLetters } from './pressLetters.js'
import { displayBoxes } from './displayBoxes.js'
import { setTheUI } from './setTheUI.js'

import { openSettings } from './openSettings.js'
// import { updateSettings } from './updateSettings.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

// settings DOM elements
const navsettings = document.querySelector('#navsettings')
const settings = document.querySelector('#settings')

const plus = document.querySelector('#plus')
const setnum = document.querySelector('#number')
const minus = document.querySelector('#minus')

// initial setup
let gameStarted = false

let letters = []

let NEW_LETTERS = 3

// start the game
button.addEventListener('click', () => {

    letters = displayBoxes(letters, NEW_LETTERS)

    gameStarted = setTheUI(gameStarted)

    settings.style.display = 'none'

})

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) {

        letters = displayBoxes(letters, NEW_LETTERS)

        gameStarted = setTheUI(gameStarted)

        settings.style.display = 'none'

    } 

    if (gameStarted) {

        gameStarted = pressLetters(e.key, letters, gameStarted)

    } 

})

openSettings(setnum, NEW_LETTERS)

// this does not work outside
plus.addEventListener('click', () => {

    if ( NEW_LETTERS < 6 ) {

        NEW_LETTERS++

    }

    setnum.innerHTML = NEW_LETTERS
    
})   

minus.addEventListener('click', () => {

    if (NEW_LETTERS > 1) { NEW_LETTERS-- }

    setnum.innerHTML = NEW_LETTERS

})