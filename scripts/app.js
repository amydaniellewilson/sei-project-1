// Tells the for loops within the init function that create the grid how many rows (width) and columns (height) for each grid.
const widthMain = 4
const heightMain= 10
const widthSolution = 4
const heightSolution = 1
const widthChoices = 4
const heightChoices = 2
const widthHints = 2, heightHints = 2, widthHints2 = 2, heightHints2 = 2, widthHints3 = 2, heightHints3 = 2, widthHints4 = 2, heightHints4 = 2, widthHints5 = 2, heightHints5 = 2, widthHints6 = 2, heightHints6 = 2, widthHints7 = 2, heightHints7 = 2, widthHints8 = 2, heightHints8 = 2, widthHints9 = 2, heightHints9 = 2, widthHints10 = 2, heightHints10 = 2
const squares = []
let allBoxes = null
let gridItemSolution = null
let audio = null

// Declares empty arrays for pickedColors and solutionColors. Color is pushed into pickedColors when a color is selected from choices into main grid. Color is pushed into solutionColors when randomColor function is called.
let pickedColors = []
const solutionColors = []

// Indentifying that the main grid is to start at 48 - bottom left and the hint grid is to start at 88 - top left.
let mainIndex = 48
let hintIndex = 88
const solutionIndex = 3

// Array of colors to be randomly selected by the computer.
const randColor = ['#FF0000', '#FFA500', '#FFFF00', '#00FF7F', '#00BFFF', '#EE82EE', '#9932CC', '#696969']

// Function that randomly selects a color from randColor array using Math.random.
function randomColor(){
  return randColor[Math.floor(Math.random() * randColor.length)]
}

// Function for when a grid is clicked that contains the class .box-red .box-orange etc, it adds the class to the correct grid-item (square) in the main grid. It starts at 48 (bottom left) and moves to the right. It does this by calling the reassignIndex funcgtion. It also pushes the color # to the empty array pickedColors and sets an attribute of data-color + red, orange etc.
function assignColors(e) {
  if (e.target.classList.contains('box-red')) {
    if (pickedColors.includes('#FF0000')) return
    squares[mainIndex].classList.add('box-red')
    squares[mainIndex].setAttribute('data-color', 'red')
    pickedColors.push('#FF0000')
  } else if (e.target.classList.contains('box-orange')) {
    if (pickedColors.includes('#FFA500')) return
    squares[mainIndex].classList.add('box-orange')
    squares[mainIndex].setAttribute('data-color', 'orange')
    pickedColors.push('#FFA500')
  } else if (e.target.classList.contains('box-yellow')) {
    if (pickedColors.includes('#FFFF00')) return
    squares[mainIndex].classList.add('box-yellow')
    squares[mainIndex].setAttribute('data-color', 'yellow')
    pickedColors.push('#FFFF00')
  } else if (e.target.classList.contains('box-green')) {
    if (pickedColors.includes('#00FF7F')) return
    squares[mainIndex].classList.add('box-green')
    squares[mainIndex].setAttribute('data-color', 'green')
    pickedColors.push('#00FF7F')
  } else if (e.target.classList.contains('box-blue')) {

    if (pickedColors.includes('#00BFFF')) return
    squares[mainIndex].classList.add('box-blue')
    squares[mainIndex].setAttribute('data-color', 'blue')
    pickedColors.push('#00BFFF')
  } else if (e.target.classList.contains('box-pink')) {
    if (pickedColors.includes('#EE82EE')) return
    squares[mainIndex].classList.add('box-pink')
    squares[mainIndex].setAttribute('data-color', 'pink')
    pickedColors.push('#EE82EE')
  } else if (e.target.classList.contains('box-purple')) {
    if (pickedColors.includes('#9932CC')) return
    squares[mainIndex].classList.add('box-purple')
    squares[mainIndex].setAttribute('data-color', 'purple')
    pickedColors.push('#9932CC')
  } else if (e.target.classList.contains('box-grey')) {
    if (pickedColors.includes('#696969')) return
    squares[mainIndex].classList.add('box-grey')
    squares[mainIndex].setAttribute('data-color', 'grey')
    pickedColors.push('#696969')
  }
  console.log(pickedColors)
  reassignIndex()
}
console.log(squares)

// Function so that each time you select a color for the main grid, it starts at 48 (bottom left) and once it gets to 52 (bottom right, fourth at the end of the line) it knows to go up to the far left of the row up. -7 from the last clicked. It also clears the pickedColors array once all four have been selected for the next round.
function reassignIndex() {
  if (mainIndex === 15) {
    checkLoss()
    checkWin()
  }  else if (mainIndex % 4 === 3) {
    mainIndex -= 7
    checkRow(pickedColors, solutionColors)
    pickedColors = []
    checkWin()
    console.log(pickedColors)
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

// Function to check if no colors match.
function noMatch(arr1, arr2){
  let counter = 0
  arr1.forEach( (value) =>{
    value !== arr2[value] ? counter++ : counter
  })
  return counter
}

// Function to check both the solution and main. It runs the exact and rough functions and tells redPegs that it is the exact function and whitePegs that it is the rough function. Pushes however many matches either 'red' or 'white' into the hint array. Plus runs the hintColors function to work out where to place the red or white.
let hint = []

function checkRow(solution, main){
  const crimsonPegs = exact(solution,main)
  const whitePegs = rough(solution,main)
  const blackPegs = noMatch(solution,main)
  hint = []
  for (var i = 0; i < crimsonPegs; i++) {
    hint.push('crimson')
    console.log(hint)
    generateRed()
    hintColors()
  }
  for (var j = 0; j < whitePegs; j++) {
    hint.push('white')
    console.log(hint)
    generateWhite()
    hintColors()
  }
  for (var k = 0; k < blackPegs; k++) {
    if (hint.length < 4) {
      hint.push('black')
      console.log(hint)
      generateBlack()
      hintColors()
    }
  }
  return hint
}

// Works out where the red or white should go.
function hintColors() {
  if (hintIndex % 4 === 3) {
    hintIndex -= 7
  } else {
    hintIndex ++
  }
}

// Makes the hints red or white.
function generateRed() {
  squares[hintIndex].classList.add('box-crimson')
}
function generateWhite() {
  squares[hintIndex].classList.add('box-white')
}
function generateBlack() {
  squares[hintIndex].classList.add('box-black')
}

// Checking for win, revealing colors and window alert to advise of win.The hint.every(peg => peg === 'red') is basically saying that if every item inside hint is equals to red then you win.
function checkWin() {
  if (hint.every(peg => peg === 'crimson')) {
    gridItemSolution.forEach(solution => solution.classList.remove('box-blank'))
    console.log('win condition met')
    audio.src = '/Users/amydaniellewilson/development/projects/sei-project-1/sounds/big-brain.mov'
    audio.play()
    setTimeout(() => {
      window.alert('WINNER! Press the Reset button to play again!')
    }, 500)
  }
}

function checkLoss() {
  if (hint.includes('white', 'black')) {
    gridItemSolution.forEach(solution => solution.classList.remove('box-blank'))
    console.log('lost!')
    audio.src = '/Users/amydaniellewilson/development/projects/sei-project-1/sounds/zed2.mp3'
    audio.play()
    setTimeout(() => {
      window.alert('YOU ARE DEAD! Click the Reset button to try again!')
    }, 500)
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
  const resetBtn = document.querySelector('.reset')
  audio = document.querySelector('#audio')


  // Grid squares for Solution + running randomColor function for Solution section.
  for (let i = 0; i < widthSolution * heightSolution; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.classList.add('solution')
    square.classList.add(i)
    squares.push(square)
    gridSolution.appendChild(square)

    playBtn.addEventListener('click', () => {
      audio.src = '/Users/amydaniellewilson/development/projects/sei-project-1/sounds/theme3.mp4'
      audio.play()
      let color = randomColor()
      while (solutionColors.includes(color)) {
        color = randomColor()
      }

      square.style.backgroundColor = color
      square.classList.add(color)
      console.log(color)
      solutionColors.push(color)
      console.log(solutionColors)
      // square.style.backgroundColor = cover
      square.classList.add('box-blank')
    })
  }
  //Redefining gridItemSolution as the solution boxes.
  gridItemSolution = document.querySelectorAll('.grid-item.solution')
  console.log(gridItemSolution)


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
    square.classList.add('main', i)
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

  // Assigning each box style (color)
  allBoxes = document.querySelectorAll('.grid-item.choices')

  allBoxes.forEach(box => box.addEventListener('click', assignColors))

  resetBtn.addEventListener('click', () => {
    location.reload()
  })
}

window.addEventListener('DOMContentLoaded', init)
