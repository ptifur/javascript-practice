export function setTheUI(gameStarted) {

    // set the state
    gameStarted = true

    button.disabled = true
    
    caption.innerHTML = 'Press the first letter on the keyboard'

    return gameStarted

}