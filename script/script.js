import { pressLetters } from './pressLetters.js'
import { displayBoxes } from './displayBoxes.js'
import { openSettings } from './openSettings.js'
import { initGame } from './initGame.js'

// init or load would be better here

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

// settings DOM elements
const navsettings = document.querySelector('#navsettings')
const settings = document.querySelector('#settings')

const setnum = document.querySelector('#number')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

// All of these document.querySelector names can be improved

// initial setup
let hasGameStarted = false

let letters = []

let newLetters = 3

// start the game
button.addEventListener('click', () => {

    letters = displayBoxes(letters, newLetters)

    hasGameStarted = initGame()

})

document.addEventListener('keydown', event => {

    if (event.key === "Enter" && !hasGameStarted) {

        letters = displayBoxes(letters, newLetters)

        hasGameStarted = initGame()

    }

    if (hasGameStarted) {

        hasGameStarted = pressLetters(event.key, letters, hasGameStarted)

    }

})

// open settings window
openSettings(setnum, newLetters)

plus.addEventListener('click', () => {

    if (newLetters < 6) newLetters++

    setnum.innerHTML = newLetters

})

minus.addEventListener('click', () => {

    if (newLetters > 1) newLetters--

    setnum.innerHTML = newLetters

})

// export function setNewLetters(newValue) {
//     if (!newValue) return;
//     newLetters = newValue;
//   }

// sets the value for you
// So you can then call this function in your event listeners and update your variable this way. 
// Skips passing values back and forth, back and forth.