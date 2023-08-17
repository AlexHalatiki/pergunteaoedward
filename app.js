let cache1 = ''
let cache2 = ''

function load() {
    let container = document.getElementById("change")
    container.style.removeProperty("min-width")
    container.innerHTML = ""
    container.style.display = "flex"

    let input1 = document.createElement("input")
    let input2 = document.createElement("input")
    input1.type = "text"
    input1.value = cache1
    input2.type = "text"
    input2.value = cache2
    let vs = document.createElement("span")
    vs.classList.add("gray")
    vs.textContent = "vs."
    container.appendChild(input1)
    container.appendChild(vs)
    container.appendChild(input2)

    let button1 = document.getElementById("button1")
    button1.innerHTML = "Adivinhar"
}

function reload(){
    load()

    let button1 = document.getElementById("button1")
    button1.style.display = "block"
    let button2 = document.getElementById("button2")
    button2.style.display = "none"
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function choice(){
    let inputs = document.getElementsByTagName("input")
    inputs[0].setAttribute("disabled", "true")
    inputs[1].setAttribute("disabled", "true")

    let button1 = document.getElementById("button1")
    button1.setAttribute("disabled", "true")
    button1.innerHTML = ""
    let loader = document.createElement("div")
    loader.classList.add("loader")
    button1.appendChild(loader)

    await new Promise(resolve => setTimeout(resolve, 3000))

    let container = document.getElementById("change")
    container.style.display = "block"
    let text1 = inputs[0].value
    let text2 = inputs[1].value
    cache1 = text1
    cache2 = text2

    container.innerHTML = ""
    let options = document.createElement("div")
    options.classList.add("backgroundWhite")
    let strong1 = document.createElement("strong")
    strong1.textContent = text1
    let strong2 = document.createElement("strong")
    strong2.textContent = text2
    let span = document.createElement("span")
    span.textContent = "vs."
    options.appendChild(strong1)
    options.appendChild(span)
    options.appendChild(strong2)

    let disse = document.createElement("p")
    disse.textContent = "O Edward disse:"

    let option = document.createElement("div")
    option.classList.add("backgroundWhite")
    let strongResult = document.createElement("strong")
    let result = randomBetween(0, 1)

    if(result == 0)
        strongResult.textContent = text1
    else
        strongResult.textContent = text2

    option.appendChild(strongResult)
    container.appendChild(options)
    container.appendChild(disse)
    container.appendChild(option)

    button1.style.display = "none"
    button1.removeAttribute("disabled")
    let button2 = document.getElementById("button2")
    button2.style.display = "block"

    let aux = strong1.clientWidth + strong2.clientWidth + 40.328 + 32 + 'px'
    container.style.minWidth = aux
    button2.style.minWidth = aux
}

window.onload = load