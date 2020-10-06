export function openSettings(setnum, NEW_LETTERS) {

    settings.style.display = 'none'

    setnum.innerHTML = NEW_LETTERS

    // settings window
    navsettings.addEventListener('click', () => {

        settings.style.display = (settings.style.display == 'none')
            ? 'block'
            : 'none'

    })

    document.querySelector('#settingstext').addEventListener('click', () => {

        settings.style.display = 'none'

    })

}