const randomChars = 'abcdefghijklmnopqrstuvwxyz      '

export function random(num) {

    return Math.floor(Math.random() * num)

}

export function newLetters(length) {

    let randomLetters = []

    for ( let i = 0; i < length; i++ ) {
        randomLetters.push(randomChars.charAt(random(randomChars.length)))
    }

    return randomLetters

}

export function createBoxes(letters, node) {

    letters.forEach((letter) => {

        const div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML = letter

        node.appendChild(div)

    })

}

// let randomChars = 'abcdefghijklmnopqrstuvwxyz      '
// let randomLetters = ''

// let randomLetters = []

// you can just push into an array instead of building a string and then splitting it