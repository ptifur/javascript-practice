export function openSettings(setnum, NEW_LETTERS) {

    settings.style.display = 'none'

    setnum.innerHTML = NEW_LETTERS

    // settings window
    navsettings.addEventListener('click', () => {
        
        if (settings.style.display == 'none') {

            settings.style.display = 'block'

        } else {

            settings.style.display = 'none'

        }
        
    })

    document.querySelector('#settingstext').addEventListener('click', () => {

        settings.style.display = 'none'
    
    })

}