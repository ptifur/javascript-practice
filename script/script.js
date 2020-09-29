import { pressLetters } from './pressLetters.js'
import { displayBoxes } from './displayBoxes.js'
import { setTheUI } from './setTheUI.js'

const button = document.querySelector('#button')
const caption = document.querySelector('#caption')
const game = document.querySelector('#game')

// settings DOM elements
const navSettings = document.querySelector('.nav_settings')
const settings = document.querySelector('.settings')

const setPlus = document.querySelector('#plus')
const setNumber = document.querySelector('#number')
const setMinus = document.querySelector('#minus')

let audioStart = new Audio('./media/start.wav')
let audioSettings = new Audio('./media/settings.wav')

// initial setup
let gameStarted = false

let letters = []

let NEW_LETTERS = 3

// start the game
button.addEventListener('click', () => {

    letters = displayBoxes(letters, NEW_LETTERS)

    gameStarted = setTheUI(gameStarted)

    settings.style.display = 'none'

    // playSound(audioStart)

})

document.addEventListener('keydown', e => {

    if (e.key === "Enter" && !gameStarted) {

        letters = displayBoxes(letters, NEW_LETTERS)

        gameStarted = setTheUI(gameStarted)

        settings.style.display = 'none'

        // playSound(audioStart)

    } 

    if (gameStarted) {

        gameStarted = pressLetters(e.key, letters, gameStarted)

    } 

})

settings.style.display = 'none'

// settings window
navSettings.addEventListener('click', () => {

    if (settings.style.display == 'none') {

        settings.style.display = 'block'

    } else {

        settings.style.display = 'none'

    }
    
})

setNumber.innerHTML = NEW_LETTERS

setPlus.addEventListener('click', () => {

    if (NEW_LETTERS < 6) { NEW_LETTERS++ }
    
    setNumber.innerHTML = NEW_LETTERS

})

setMinus.addEventListener('click', () => {

    if (NEW_LETTERS > 1) { NEW_LETTERS-- }

    setNumber.innerHTML = NEW_LETTERS

})

// settings button
document.querySelector('.settings-text').addEventListener('click', () => {

    settings.style.display = 'none'

})

function playSound(sound) {
    sound.play()
}