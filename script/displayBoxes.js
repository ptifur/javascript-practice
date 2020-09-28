import { newLetters, createBoxes } from './utils.js'

export function displayBoxes(letters) {

    // generate new letters
    letters = newLetters(2)

    // display boxes
    createBoxes(letters, game)

    return letters

}