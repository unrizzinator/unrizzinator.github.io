const welcomeElement = document.getElementById('welcome')

function typewrite(el, interval) {
    let originalContent = `${el.innerText}`
    welcomeElement.innerHTML = ""

    let i = 0
    function loop() {
        setTimeout(function() {
            i++
            welcomeElement.innerText += originalContent.substring(i-1, i)

            if (i < originalContent.length) loop()
        }, interval)
    }

    loop()
}

function expandText(el) {
    el.style.letterSpacing = `5px`
    setTimeout(function() {
        el.style.letterSpacing = `2px`
    }, 500)
}

typewrite(welcomeElement, 35)
setTimeout(function(){expandText(welcomeElement)}, 300)