const widthMain = 4
const heightMain= 10
const widthSolution = 4
const heightSolution = 1
const widthChoices = 4
const heightChoices = 2
const widthHints = 2
const heightHints = 2
const widthHints2 = 2
const heightHints2 = 2
const widthHints3 = 2
const heightHints3 = 2
const widthHints4 = 2
const heightHints4 = 2
const widthHints5 = 2
const heightHints5 = 2
const widthHints6 = 2
const heightHints6 = 2
const widthHints7 = 2
const heightHints7 = 2
const widthHints8 = 2
const heightHints8 = 2
const widthHints9 = 2
const heightHints9 = 2
const widthHints10 = 2
const heightHints10 = 2
const squares = []

function init() {
  const gridMain = document.querySelector('.grid-layout.main')
  const gridSolution = document.querySelector('.grid-layout.solution')
  const gridChoices = document.querySelector('.grid-layout.choices')
  const gridHints = document.querySelector('.grid-layout.hints')
  const gridHints2 = document.querySelector('.grid-layout.hints2')
  const gridHints3 = document.querySelector('.grid-layout.hints3')
  const gridHints4 = document.querySelector('.grid-layout.hints4')
  const gridHints5 = document.querySelector('.grid-layout.hints5')
  const gridHints6 = document.querySelector('.grid-layout.hints6')
  const gridHints7 = document.querySelector('.grid-layout.hints7')
  const gridHints8 = document.querySelector('.grid-layout.hints8')
  const gridHints9 = document.querySelector('.grid-layout.hints9')
  const gridHints10 = document.querySelector('.grid-layout.hints10')

  // Grid squares for Main
  for (let i = 0; i < widthMain * heightMain; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    square.innerHTML = i
    gridMain.appendChild(square)
  }

  // Grid squares for Solution
  for (let i = 0; i < widthSolution * heightSolution; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    square.innerHTML = i
    gridSolution.appendChild(square)
  }

  // Grid squares for Choices
  for (let i = 0; i < widthChoices * heightChoices; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    square.innerHTML = i
    gridChoices.appendChild(square)
  }

  // Grid sqaures for Hints
  for (let i = 0; i < widthHints * heightHints; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints.appendChild(square)
  }

  for (let i = 0; i < widthHints2 * heightHints2; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints2.appendChild(square)
  }

  for (let i = 0; i < widthHints3 * heightHints3; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints3.appendChild(square)
  }

  for (let i = 0; i < widthHints4 * heightHints4; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints4.appendChild(square)
  }
  for (let i = 0; i < widthHints5 * heightHints5; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints5.appendChild(square)
  }
  for (let i = 0; i < widthHints6 * heightHints6; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints6.appendChild(square)
  }
  for (let i = 0; i < widthHints7 * heightHints7; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints7.appendChild(square)
  }
  for (let i = 0; i < widthHints8 * heightHints8; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints8.appendChild(square)
  }
  for (let i = 0; i < widthHints9 * heightHints9; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints9.appendChild(square)
  }
  for (let i = 0; i < widthHints10 * heightHints10; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    square.innerHTML = i
    gridHints10.appendChild(square)
  }


}


window.addEventListener('DOMContentLoaded', init)
