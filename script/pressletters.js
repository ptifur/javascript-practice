export function pressLetters(key, letters, gameStarted) {

    // remove the letter    
    if (key === letters[0]) {

        letters.shift()

        const firstLetter = document.querySelector('.box:first-of-type')

        game.removeChild(firstLetter)

    }

   // game over
   if (letters.length === 0) {

        // reset the state
        gameStarted = false

        button.disabled = false

        caption.innerHTML = 'Well done!'

    }    

    return gameStarted

}