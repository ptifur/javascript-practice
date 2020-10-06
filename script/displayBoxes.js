import { newLetters, createBoxes } from './utils.js'

/**
 * ...
 * @param {Array} letters
 * @param {Number} number
 */
export function displayBoxes(letters, number) {

    // generate new letters
    letters = newLetters(number)

    // display boxes
    createBoxes(letters, game)

    return letters

}