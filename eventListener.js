// target the input field
// whenever someone type something
// alert the input field

// //alert('eventListener linked')
//
// var inputField = document.querySelector('#firstname')
// // querySelector only targets the first 'input'. need a # if it is an id
// // var inputField2 = document.getElementsByTagName('input')
// // // getElementsByTagName targets all the ElementS of the Tag name
// // var inputField3 = document.querySelectorAll('inputfield')
// // // querySelectorAll target all 'input'
// // var inputField4 = document.getElementById('input')
// // // getElementById only targets the Element of the Id. dont need a #
// // var inputField2 = document.getElementsByClassName('.input')
// // // getElementsByClassName targets all the ElementS of the Class name
//
// function inputClick() {
//   alert('input is clicked')
// }
//
// inputField.addEventListener('click', inputClick)

var startButton = document.querySelector('.startGame')
var body = document.querySelector('html')
// var overallBg = document.querySelector('html')
var correctButton = document.querySelector('.correct')
var wordDisplay = document.querySelector('.wordDisplay')
var score = document.querySelector('.score')
var bgColor = ['yellow', 'blue', 'red', 'green', 'pink', 'brown', 'orange', 'purple']
var colorWord = ['yellow', 'blue', 'red', 'green', 'pink', 'brown', 'orange', 'purple']
var r = -1
var g = -1
var b = -1

startButton.addEventListener('click', startTime)

function startTime () {
  // setTimeout(afterTimeout, 5000)
  body.style.background = 'white'
  startButton.style.visibility = 'hidden'
  setInterval(startGame, 2000)
}

function startGame () {
  colorChanger()
  // console.log('hello')
}
// function changeColor () {
//   body.style.backgroundColor = colorChanger()
//   // body.style.backgroundColor = 'red'
// }

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function colorChanger () {
  r = randomFn(0, 7)
  console.log(r)
  if (r === 0) {
    body.style.backgroundColor = bgColor[0]
  } else if (r === 1) {
    body.style.backgroundColor = bgColor[1]
  } else if (r === 2) {
    body.style.backgroundColor = bgColor[2]
  } else if (r === 3) {
    body.style.backgroundColor = bgColor[3]
  } else if (r === 4) {
    body.style.backgroundColor = bgColor[4]
  } else if (r === 5) {
    body.style.backgroundColor = bgColor[5]
  } else if (r === 6) {
    body.style.backgroundColor = bgColor[6]
  } else if (r === 7) {
    body.style.backgroundColor = bgColor[7]
  }
  // body.style.backgroundColor = bgColor[r]
  wordChanger()
}

function wordChanger () {
  g = randomFn(0, 7)
  console.log(g)
  if (g === 0) {
    wordDisplay.textContent = colorWord[0]
    // wordDisplay.style.color = colorWord[0]
  } else if (g === 1) {
    wordDisplay.textContent = colorWord[1]
    // wordDisplay.style.color = colorWord[1]
  } else if (g === 2) {
    wordDisplay.textContent = colorWord[2]
    // wordDisplay.style.color = colorWord[2]
  } else if (g === 3) {
    wordDisplay.textContent = colorWord[3]
  } else if (g === 4) {
    wordDisplay.textContent = colorWord[4]
  } else if (g === 5) {
    wordDisplay.textContent = colorWord[5]
  } else if (g === 6) {
    wordDisplay.textContent = colorWord[6]
  } else if (g === 7) {
    wordDisplay.textContent = colorWord[7]
  }
  // wordDisplay.textContent = colorWord[r]
  wordColorChanger()
}

function wordColorChanger () {
  b = randomFn(0, 7)
  console.log(b)
  if (b === 0) {
    wordDisplay.style.color = colorWord[0]
    // wordDisplay.style.color = colorWord[0]
  } else if (b === 1) {
    wordDisplay.style.color = colorWord[1]
    // wordDisplay.style.color = colorWord[1]
  } else if (b === 2) {
    wordDisplay.style.color = colorWord[2]
    // wordDisplay.style.color = colorWord[2]
  } else if (b === 3) {
    wordDisplay.style.color = colorWord[3]
  } else if (b === 4) {
    wordDisplay.style.color = colorWord[4]
  } else if (b === 5) {
    wordDisplay.style.color = colorWord[5]
  } else if (b === 6) {
    wordDisplay.style.color = colorWord[6]
  } else if (b === 7) {
    wordDisplay.style.color = colorWord[7]
  }
  // wordDisplay.textContent = colorWord[r]
}

correctButton.addEventListener('click', correctNot)
var totalScore = 0
function correctNot (wordChanger, colorChanger) {
  if (r === g) {
    totalScore += 1
  }
  score.textContent = totalScore
}
