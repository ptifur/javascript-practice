import { pressLetters } from './pressLetters.js'
import { displayBoxes } from './displayBoxes.js'
import { initGame } from './initGame.js'

import { openSettings } from './openSettings.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

// settings DOM elements
const navsettings = document.querySelector('#navsettings')
const settings = document.querySelector('#settings')

const setnum = document.querySelector('#number')

// Addition/Subtraction
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

// initial setup
let hasGameStarted = false

let letters = []

let NEW_LETTERS = 3

// start the game
button.addEventListener('click', () => {

    letters = displayBoxes(letters, NEW_LETTERS)

    hasGameStarted = initGame()

})

document.addEventListener('keydown', event => {

    if (event.key === "Enter" && !hasGameStarted) {

        letters = displayBoxes(letters, NEW_LETTERS)

        hasGameStarted = initGame()

    }

    if (hasGameStarted) {

        hasGameStarted = pressLetters(event.key, letters, hasGameStarted)

    }

})

// open settings window
openSettings(setnum, NEW_LETTERS)

// this does not work outside
plus.addEventListener('click', () => {

    if (NEW_LETTERS < 6) { NEW_LETTERS++ }

    setnum.innerHTML = NEW_LETTERS

})

minus.addEventListener('click', () => {

    if (NEW_LETTERS > 1) { NEW_LETTERS-- }

    setnum.innerHTML = NEW_LETTERS

})