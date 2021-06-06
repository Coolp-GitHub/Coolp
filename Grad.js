var root = document.documentElement;

<< link
rel = "stylesheet"
href = "styles.css" / >

document.addEventListener('resize', () => {
    root.style.setProperty('--screen-x', window.screenX)
    root.style.setProperty('--screen-y', window.screenY)
})
