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

var button = document.querySelector('#startGame')
var body = document.querySelector('body')
var correctButton = document.querySelector('correct')
var wordDisplay = document.query.querySelector('wordDisplay')
var score = document.querySelector('score')
var bgColor = ['yellow', 'blue', 'red', 'white']
var colorWord = ['yellow', 'blue', 'red', 'white']
var totalScore = 0

button.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  setInterval(startGame, 4000)
})
function startGame(){
  changeColor()
}
function changeColor () {
  body.style.backgroundColor = colorChanger()
}

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function colorChanger () {
  var r = randomFn(0, 4)
  if (r === bgColor[0].length - 1) {
    colorChanger = bgColor[0]
  } else if (r === bgColor[1].length - 1) {
    colorChanger = bgColor[2]
  } else if (r === bgColor[2].length - 1) {
    colorChanger = bgColor[2]
  } else if (r === bgColor[3].length - 1) {
    colorChanger = bgColor[3]
  }
  wordChanger()
}

function wordChanger () {
  var r = randomFn(0, 4)
  if (r === colorWord[0].length - 1) {
    wordDisplay.textContent = colorWord[0]
  } else if (r === colorWord[1].length - 1) {
    wordDisplay.textContent = colorWord[2]
  } else if (r === colorWord[2].length - 1) {
    wordDisplay.textContent = colorWord[2]
  } else if (r === colorWord[3].length - 1) {
    wordDisplay.textContent = colorWord[3]
  }
  correct()
}
function correct(wordChanger, colorChanger) {
  if (wordChanger === colorChanger){
    scoreCounter()
  }
}

function scoreCounter(){
  totalScore += 1
  return score.textContent = totalScore
}
