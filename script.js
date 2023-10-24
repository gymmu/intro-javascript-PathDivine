function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "red"
}

function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = 0
  numberElement.textContent = num
}

function writeText() {
  const inputElem = document.querySelector("#input")
  const outputElem = document.querySelector("#output")
  const outValue = outputElem.textContent + "\n" + inputElem.value
  outputElem.textContent = outValue
}
