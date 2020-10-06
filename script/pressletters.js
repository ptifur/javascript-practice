
const audio = {
    press: new Audio('./media/press.wav'),
    gameOver: new Audio('./media/gameover.wav')
}

export function pressLetters(key, letters, hasGameStarted) {

    // remove the letter
    if (key === letters[0]) {

        letters.shift()

        const firstLetter = document.querySelector('.box:first-of-type')

        game.removeChild(firstLetter)

        playSound(audio.press)

    }

   // game over
   if (letters.length === 0) {

        // reset the state
        hasGameStarted = false

        button.disabled = false

        caption.innerHTML = 'Well done!'

        setTimeout(playSound(audio.gameOver), 500)

    }

    return hasGameStarted

}

function playSound(sound) {
    sound.play()
}