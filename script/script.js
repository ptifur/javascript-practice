import { newLetters } from './utils.js'

const button = document.querySelector('#button-start')
const caption = document.querySelector('#caption')
const gameWindow = document.querySelector('#game-window')

let gameStarted = false

// start the game
button.addEventListener('click', () => startGame())

document.addEventListener('keydown', e => {

    if (e.key === "Enter") {
        startGame() 
    }

})

function startGame() {

    button.disabled = true

    if (!gameStarted) {

        // generate new letters
        let letters = newLetters(2)

        caption.innerHTML = 'Press the first letter on the keyboard'

        createBoxes(letters)

        gameStarted = true

        pressLetters(letters)

    }

}

function createBoxes(l) {

    l.forEach((listItem, i) => {

        const div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML = listItem
    
        gameWindow.appendChild(div)
    
    })

}

function pressLetters(letters) {

    document.addEventListener('keydown', e => {

        let key = e.key

        if (key === letters[0]) {

            const firstLetter = document.querySelector('.box:first-of-type')

            gameWindow.removeChild(firstLetter)

            letters.shift()

        }

        if (letters.length === 0) {

            gameStarted = false

            button.disabled = false

            document.removeEventListener('keydown', () => {
                //
            })

            // console.log('there you go!')

            caption.innerHTML = 'How to stop this madness!'

        }

    })

}