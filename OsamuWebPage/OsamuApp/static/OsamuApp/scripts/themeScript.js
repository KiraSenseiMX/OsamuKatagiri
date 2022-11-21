console.log('indexThemeScript.js is running')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('option ' + mode + ' clicked')
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.querySelector('#theme-style').href = "static/OsamuApp/styles/default.css"
    }

    if (mode == 'blue') {
        document.querySelector('#theme-style').href = "static/OsamuApp/styles/blue.css"
    }

    if (mode == 'green') {
        document.querySelector('#theme-style').href = "static/OsamuApp/styles/green.css"
    }

    if (mode == 'purple') {
        document.querySelector('#theme-style').href = "static/OsamuApp/styles/purple.css"
    }

    localStorage.setItem('theme', mode)
}