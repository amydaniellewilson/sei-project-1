const widthMain = 4
const heightMain= 10
const widthSolution = 4
const heightSolution = 1
const widthChoices = 4
const heightChoices = 2
const squares = []

function init() {
  const gridMain = document.querySelector('.grid-layout.main')
  const gridSolution = document.querySelector('.grid-layout.solution')
  const gridChoices = document.querySelector('.grid-layout.choices')
  console.log(gridMain)
  console.log(gridSolution)
  console.log(gridChoices)

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


}


window.addEventListener('DOMContentLoaded', init)
