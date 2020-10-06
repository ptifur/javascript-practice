const audio = {

    press: new Audio('./media/press.wav'),

    gameOver: new Audio('./media/gameover.wav')

}

// You can also use a map to store similar objects

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

// boolean are easy to read when prefixed with is, has, can, should

function playSound(sound) {

    sound.play()

}

// This file could also be named more generic, something like userInput.js

/* I feel like you could reduce some of your .js files. For example the file setTheUI.js doesn't import anything 
or does anything fancy that it needs to be its own module. I'm sure you can find a different spot for it and get rid of the file entirely :)

Same goes for the function createBoxes in util.js. createBoxes is just a function in util but displayBoxes gets its own .js file? 
It's not all bad but just heavily inconsistent 
*/

/* Also, how about a mode/settings where you can choose to use real world words too? The source for the words could be a list 
of the 1000 most used words in the english language (I'm sure there are a ton of lists online available).
*/