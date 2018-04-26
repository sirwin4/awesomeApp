const output = document.querySelector(".output")
const fragment = document.createDocumentFragment()

//factory function of components
const inputFieldFactory = (classList, x, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.x = x
    return inputField
}

const createInput = (classList, x, type) => {
    const inputField = document.createElement("input")
    inputField.type = type
    inputField.classList = classList
    inputField.x = x
}
// input

//button
const buttonFactory = (classList, x) => {
    const theButton = document.createElement("button")
    inputField.classList = classList
    inputField.x = x
    return theButton
}

const createCardButton = buttonFactory("button--submit", "create card")

const cardTextInput = inputFieldFactory("input--text", "enter card text here", "text")

createCardButton.addEventListener("click", function (inputReference) {
    const userEntry = cardTextInput.value 
})

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)


buttonFactory("button--submit", "create card")

//event listener on button - get value of input and create card component with that text

//create card