export function newLetters(length) {

    let randomChars = 'abcdefghijklmnopqrstuvwxyz'
    let randomLetters = ''
    
    for ( let i = 0; i < length; i++ ) {
        randomLetters += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }

    let randomLettersArray = randomLetters.split('')
    
    return randomLettersArray

}