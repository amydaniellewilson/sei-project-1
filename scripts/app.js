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

let redBox = null
let orangeBox = null
let yellowBox = null
let greenBox = null
let blueBox = null
let pinkBox = null
let purpleBox = null
let greyBox = null
let allBoxes = null

let lastClickedIndex = 51



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
  let pickedColors = []
  let solutionColors = []


  // Grid squares for Solution
  for (let i = 0; i < widthSolution * heightSolution; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.classList.add('solution')
    square.classList.add(i)
    squares.push(square)
    square.innerHTML = i
    gridSolution.appendChild(square)

    const randColor = ['#FF0000', '#FFA500', '#FFFF00', '#00FF7F', '#00BFFF', '#EE82EE', '#9932CC', '#696969']

    const rand = randColor[Math.floor(Math.random() * randColor.length)]
    playBtn.addEventListener('click', () => {
      square.style.backgroundColor =  rand
      square.classList.add(rand)
      console.log(rand)
      solutionColors.push(rand)
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
    square.innerHTML = i
    gridMain.appendChild(square)
  }

  // Assigning each box style (color)
  redBox = document.querySelector('.grid-item.box-red')
  orangeBox = document.querySelector('.grid-item.box-orange')
  yellowBox = document.querySelector('.grid-item.box-yellow')
  greenBox = document.querySelector('.grid-item.box-green')
  blueBox = document.querySelector('.grid-item.box-blue')
  pinkBox = document.querySelector('.grid-item.box-pink')
  purpleBox = document.querySelector('.grid-item.box-purple')
  greyBox = document.querySelector('.grid-item.box-grey')
  allBoxes = document.querySelectorAll('.grid-item.choices')


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
      // create and the run check function here. Create somewhere else.
      // once checked the last thing it should do is clear pickedColors array. pickedColors[]
      checkRow()
    } else {
      mainIndex ++
    }
  }

  allBoxes.forEach(box => box.addEventListener('click', assignColors))

  function checkRow() {
    if (pickedColors[0,1,2,3] === solutionColors[0,1,2,3]) {
      squares[hintIndex].style.backgroundColor = 'red'
      squares[hintIndex + 1].style.backgroundColor = 'red'
      squares[hintIndex + 2].style.backgroundColor = 'red'
      squares[hintIndex + 3].style.backgroundColor = 'red'
    } else if (pickedColors[0] === solutionColors[1] || solutionColors[2] || solutionColors[3]) {
      squares[hintIndex].style.backgroundColor = 'red'
    }
  }

  // for (let i = 0; pickedColors.length < i; i++) {
  //   if (pickedColors[i] !== solutionColors[i]) {
  //     console.log('matching')
  //   } else {
  //     console.log('not matching')
  //   }
  // }









  // redBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-red')
  //     square.setAttribute('data-color', 'red')
  //     pickedColors.push('red')
  //     console.log(pickedColors)
  //   })
  // })
  // orangeBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-orange')
  //     square.setAttribute('data-color', 'orange')
  //     pickedColors.push('orange')
  //     console.log(pickedColors)
  //   })
  // })
  // yellowBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-yellow')
  //     square.setAttribute('data-color', 'yellow')
  //     pickedColors.push('yellow')
  //     console.log(pickedColors)
  //   })
  // })
  // greenBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-green')
  //     square.setAttribute('data-color', 'green')
  //     pickedColors.push('green')
  //     console.log(pickedColors)
  //   })
  // })
  // blueBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-blue')
  //     square.setAttribute('data-color', 'blue')
  //     pickedColors.push('blue')
  //     console.log(pickedColors)
  //   })
  // })
  // pinkBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-pink')
  //     square.setAttribute('data-color', 'pink')
  //     pickedColors.push('pink')
  //     console.log(pickedColors)
  //   })
  // })
  // purpleBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-purple')
  //     square.setAttribute('data-color', 'purple')
  //     pickedColors.push('purple')
  //     console.log(pickedColors)
  //   })
  // })
  // greyBox.addEventListener('click', () => {
  //   square.addEventListener('click', () => {
  //     square.classList.add('box-grey')
  //     square.setAttribute('data-color', 'grey')
  //     pickedColors.push('grey')
  //     console.log(pickedColors)
  //   })
  // })


  // Grid squares for Hints
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

  // // Logic to check if grid-items in main match grid-items in Solution
  // const check = document.querySelector('.check')
  // const gridItemMain = document.querySelectorAll('.grid-item.main')
  // const gridItemSolution = document.querySelector('.grid-item.solution')



  // function checkRow() {
  //   const arrayToCheck = [gridItemMain[lastClickedIndex], gridItemMain[lastClickedIndex - 3], gridItemMain[lastClickedIndex - 2], gridItemMain[lastClickedIndex - 1]]
  //   console.log('check row now')
  // }



  // check.addEventListener('click', () => {
  //   console.log('Check is clicked')
  //   // checkRow()
  //   if (gridItemMain.className === ('grid-item main 0 box-red') && gridItemSolution.className === ('grid-item solution 0 #FF0000')) {
  //     gridItemHints.style.backgroundColor = 'red'
  //   } else {
  //     console.log('hi')
  //   }
  // })

}





window.addEventListener('DOMContentLoaded', init)
