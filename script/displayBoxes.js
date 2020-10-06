import { newLetters, createBoxes } from './utils.js'

/**
 * ...
 * @param {Array} letters
 * @param {Number} number
 */

// You should have documentation for all functions

export function displayBoxes(letters, number) {

    // generate new letters
    letters = newLetters(number)

    // display boxes
    createBoxes(letters, game)

    return letters

}

// You're super optimistic that you always pass the correct variables to other functions for example

// At some point in here you should probably check if the input, letters and number are actually 
// what they are supposed to be or if they even exist at all (aren't null/undefined). Something like

// export function displayBoxes(letters, number) {
//     if (!letters) return "oops...";
//   }

/* A: rename files to make them more generic and B: merge some files because you really don't need 
to create a new file for just a singular function if this function isn't accessed by several other modules
*/