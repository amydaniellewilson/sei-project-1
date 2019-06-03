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
  const playBtn = document.querySelector('.play')


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
      console.log('I am clicking')
    })
  }

  // Grid squares for Choices
  for (let i = 0; i < widthChoices * heightChoices; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    square.innerHTML = i
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
    square.classList.add('main')
    square.classList.add(i)
    squares.push(square)
    square.innerHTML = i
    gridMain.appendChild(square)

    // Creating consts for each box style (color)
    const redBox = document.querySelector('.grid-item.box-red')
    const orangeBox = document.querySelector('.grid-item.box-orange')
    const yellowBox = document.querySelector('.grid-item.box-yellow')
    const greenBox = document.querySelector('.grid-item.box-green')
    const blueBox = document.querySelector('.grid-item.box-blue')
    const pinkBox = document.querySelector('.grid-item.box-pink')
    const purpleBox = document.querySelector('.grid-item.box-purple')
    const greyBox = document.querySelector('.grid-item.box-grey')

    // Create event listeners for clicking on colored boxes and then copying to main grid boxes.
    redBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-red')
      })
    })
    orangeBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-orange')
      })
    })
    yellowBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-yellow')
      })
    })
    greenBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-green')
      })
    })
    blueBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-blue')
      })
    })
    pinkBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-pink')
      })
    })
    purpleBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-purple')
      })
    })
    greyBox.addEventListener('click', () => {
      square.addEventListener('click', () => {
        square.classList.add('box-grey')
      })
    })

  }


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

  // Logic to check if grid-items in main match grid-items in Solution
  const check = document.querySelector('.check')
  const gridItemMain = document.querySelector('.grid-item.main')
  console.log(gridItemMain)
  const gridItemSolution = document.querySelector('.grid-item.solution')
  console.log(gridItemSolution)
  const gridItemHints = document.querySelector('.grid-item.hints')
  console.log(gridItemHints)

  check.addEventListener('click', () => {
    console.log('Check is clicked')
    if (gridItemMain.className === ('grid-item main 0 box-red') && gridItemSolution.className === ('grid-item solution 0 #FF0000')) {
      gridItemHints.style.backgroundColor = 'white'
      console.log(gridItemHints)
    } else {
      console.log('hi')
    }
  })
}





window.addEventListener('DOMContentLoaded', init)
