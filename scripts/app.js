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

let allBoxes = null

let pickedColors = []
const solutionColors = []

const randColor = ['#FF0000', '#FFA500', '#FFFF00', '#00FF7F', '#00BFFF', '#EE82EE', '#9932CC', '#696969']

function randomColor(){
  return randColor[Math.floor(Math.random() * randColor.length)]
}



// Create event listeners for clicking on colored boxes and then copying to main grid boxes.

let mainIndex = 48
let hintIndex = 88

function assignColors(e) {
  if (e.target.classList.contains('box-red')) {
    squares[mainIndex].classList.add('box-red')
    squares[mainIndex].setAttribute('data-color', 'red')
    pickedColors.push('#FF0000')
  } else if (e.target.classList.contains('box-orange')) {
    squares[mainIndex].classList.add('box-orange')
    squares[mainIndex].setAttribute('data-color', 'orange')
    pickedColors.push('#FFA500')
  } else if (e.target.classList.contains('box-yellow')) {
    squares[mainIndex].classList.add('box-yellow')
    squares[mainIndex].setAttribute('data-color', 'yellow')
    pickedColors.push('#FFFF00')
  } else if (e.target.classList.contains('box-green')) {
    squares[mainIndex].classList.add('box-green')
    squares[mainIndex].setAttribute('data-color', 'green')
    pickedColors.push('#00FF7F')
  } else if (e.target.classList.contains('box-blue')) {
    squares[mainIndex].classList.add('box-blue')
    squares[mainIndex].setAttribute('data-color', 'blue')
    pickedColors.push('#00BFFF')
  } else if (e.target.classList.contains('box-pink')) {
    squares[mainIndex].classList.add('box-pink')
    squares[mainIndex].setAttribute('data-color', 'pink')
    pickedColors.push('#EE82EE')
  } else if (e.target.classList.contains('box-purple')) {
    squares[mainIndex].classList.add('box-purple')
    squares[mainIndex].setAttribute('data-color', 'purple')
    pickedColors.push('#9932CC')
  } else if (e.target.classList.contains('box-grey')) {
    squares[mainIndex].classList.add('box-grey')
    squares[mainIndex].setAttribute('data-color', 'grey')
    pickedColors.push('#696969')
  }
  console.log(pickedColors)
  reassignIndex()
}
console.log(squares)

function reassignIndex() {
  if (mainIndex % 4 === 3) {
    mainIndex -= 7
    const hintArray = checkRow(pickedColors, solutionColors)
    pickedColors = []
    console.log(pickedColors)
    hintColors(hintArray)
  } else {
    mainIndex ++
  }
}



// Function to check if exact match. Checks if the value of array1 is equal to the index of array2 and adds 1 counter for each.
function exact(arr1, arr2){
  let counter = 0
  arr1.forEach( (value, index) =>{
    value === arr2[index] ? counter++ : counter
  })
  return counter
}

// Funtion to check if colors match but not in the same place. Checks array1 and then checks if array2 inclues any of the same value. Then adds a counter if any matches. Secondly if any of the values match the index of the array2 (if the same place) then it will remove the counter as there will already be a counter from the exact function.
function rough(arr1, arr2){
  let counter = 0
  arr1.forEach( (value, index) =>{
    arr2.includes(value) ? counter++ : counter
    value === arr2[index] ? counter-- : counter
  })
  return counter
}

// Function to check both the solution and main. It runs the exact and rough functions and tells redPegs that it is the exact function and whitePegs that it is the rough function.
function checkRow(solution, main){
  const redPegs = exact(solution,main)
  const whitePegs = rough(solution,main)
  const hint = []
  for (var i = 0; i < redPegs; i++) {
    hint.push('red')
    console.log(hint)
  }
  for (var j = 0; j < whitePegs; j++) {
    hint.push('white')
  }
  return hint
}


function hintColors(redAndWhite) {
  if (hintIndex % 4 === 3) {
    hintIndex -= 7
  } else {
    hintIndex ++
  }
}






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
  const playBtn = document.querySelector('.play')

  // Assigning each box style (color)
  allBoxes = document.querySelectorAll('.grid-item.choices')

  allBoxes.forEach(box => box.addEventListener('click', assignColors))
  console.log(allBoxes)


  // Grid squares for Solution
  for (let i = 0; i < widthSolution * heightSolution; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.classList.add('solution')
    square.classList.add(i)
    squares.push(square)
    gridSolution.appendChild(square)

    playBtn.addEventListener('click', () => {
      let color = randomColor()
      if (solutionColors.includes(color)) {
        color = randomColor()
      }
      square.style.backgroundColor = color
      square.classList.add(color)
      console.log(color)
      solutionColors.push(color)
      console.log(solutionColors)
    })
  }

  // Grid squares for Choices
  for (let i = 0; i < widthChoices * heightChoices; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.classList.add('choices')
    squares.push(square)
    gridChoices.appendChild(square)
    if (i === 0)square.classList.add('box-red')
    if (i === 1)square.classList.add('box-orange')
    if (i === 2)square.classList.add('box-yellow')
    if (i === 3)square.classList.add('box-green')
    if (i === 4)square.classList.add('box-blue')
    if (i === 5)square.classList.add('box-pink')
    if (i === 6)square.classList.add('box-purple')
    if (i === 7)square.classList.add('box-grey')
  }

  // Grid squares for Main
  for (let i = 0; i < widthMain * heightMain; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    gridMain.appendChild(square)
  }


  // Grid squares for Hints
  for (let i = 0; i < widthHints * heightHints; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints.appendChild(square)
  }

  for (let i = 0; i < widthHints2 * heightHints2; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints2.appendChild(square)
  }

  for (let i = 0; i < widthHints3 * heightHints3; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints3.appendChild(square)
  }

  for (let i = 0; i < widthHints4 * heightHints4; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints4.appendChild(square)
  }
  for (let i = 0; i < widthHints5 * heightHints5; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints5.appendChild(square)
  }
  for (let i = 0; i < widthHints6 * heightHints6; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints6.appendChild(square)
  }
  for (let i = 0; i < widthHints7 * heightHints7; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints7.appendChild(square)
  }
  for (let i = 0; i < widthHints8 * heightHints8; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints8.appendChild(square)
  }
  for (let i = 0; i < widthHints9 * heightHints9; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints9.appendChild(square)
  }
  for (let i = 0; i < widthHints10 * heightHints10; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item','hints')
    squares.push(square)
    gridHints10.appendChild(square)
  }

}

window.addEventListener('DOMContentLoaded', init)
