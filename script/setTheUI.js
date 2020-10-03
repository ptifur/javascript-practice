export function setTheUI(gameStarted) {

    // set the state
    gameStarted = true

    button.disabled = true

    settings.style.display = 'none'
    
    caption.innerHTML = 'Press the first letter on the keyboard'

    return gameStarted

}