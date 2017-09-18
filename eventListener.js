var startButton = document.querySelector('.startGame')
var body = document.querySelector('html')
var correctButton = document.querySelector('.correct')
var wordDisplay = document.querySelector('.wordDisplay')
var score = document.querySelector('.score')
var miss = document.querySelector('.miss')
var color = ['yellow', 'blue', 'red', 'green', 'pink', 'brown', 'orange', 'violet']
// var color = ['yellow', 'blue', 'red', 'green', 'pink', 'brown', 'orange', 'purple']
var r = -1
var g = -1
var b = -1

startButton.addEventListener('click', startTime)

function startTime () {
  // setTimeout(afterTimeout, 5000)
  body.style.background = 'white'
  startButton.style.visibility = 'hidden'
  setInterval(startGame, 1000)
}

function startGame () {
  colorChanger()
}

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function colorChanger () {
  r = randomFn(0, 5)
  console.log(r)
  if (r === 0) {
    body.style.backgroundColor = color[0]
  } else if (r === 1) {
    body.style.backgroundColor = color[1]
  } else if (r === 2) {
    body.style.backgroundColor = color[2]
  } else if (r === 3) {
    body.style.backgroundColor = color[3]
  } else if (r === 4) {
    body.style.backgroundColor = color[4]
  } else if (r === 5) {
    body.style.backgroundColor = color[5]
  }
  // } else if (r === 6) {
  //   body.style.backgroundColor = color[6]
  // } else if (r === 7) {
  //   body.style.backgroundColor = color[7]
  // }
  // // body.style.backgroundColor = color[r]
  wordChanger()
}

function wordChanger () {
  g = randomFn(0, 5)
  console.log(g)
  if (g === 0) {
    wordDisplay.textContent = color[0]
    // wordDisplay.style.color = color[0]
  } else if (g === 1) {
    wordDisplay.textContent = color[1]
    // wordDisplay.style.color = color[1]
  } else if (g === 2) {
    wordDisplay.textContent = color[2]
    // wordDisplay.style.color = color[2]
  } else if (g === 3) {
    wordDisplay.textContent = color[3]
  } else if (g === 4) {
    wordDisplay.textContent = color[4]
  } else if (g === 5) {
    wordDisplay.textContent = color[5]
  }
  // } else if (g === 6) {
  //   wordDisplay.textContent = color[6]
  // } else if (g === 7) {
  //   wordDisplay.textContent = color[7]
  // }
  // // wordDisplay.textContent = color[r]
  wordColorChanger()
}

function wordColorChanger () {
  b = randomFn(0, 5)
  console.log(b)
  if (b === 0) {
    wordDisplay.style.color = color[0]
    // wordDisplay.style.color = color[0]
  } else if (b === 1) {
    wordDisplay.style.color = color[1]
    // wordDisplay.style.color = color[1]
  } else if (b === 2) {
    wordDisplay.style.color = color[2]
    // wordDisplay.style.color = color[2]
  } else if (b === 3) {
    wordDisplay.style.color = color[3]
  } else if (b === 4) {
    wordDisplay.style.color = color[4]
  } else if (b === 5) {
    wordDisplay.style.color = color[5]
  }
  // } else if (b === 6) {
  //   wordDisplay.style.color = color[6]
  // } else if (b === 7) {
  //   wordDisplay.style.color = color[7]
  // }
  // wordDisplay.textContent = color[r]
}

correctButton.addEventListener('click', correctNot)
var totalScore = 0
var totalMiss = 0
function correctNot (wordChanger, colorChanger) {
  if (r === g) {
    totalScore += 1
  }
  score.textContent = totalScore
  if (r !== g) {
    totalMiss += 1
  }
  miss.textContent = totalMiss
  if (totalScore === 3) {
    gameOver()
  }
}

function gameOver () {
  correctButton.style.visibility = 'hidden'
  alert('PARTY TIME!')
  setInterval(startGame, 2)
  startButton.style.visibility = 'visible'
  startButton.textContent = 'RECHALLENGE!'
  startButton.addEventListener('click', restartGame)
}

function restartGame () {
  location.reload()
}
