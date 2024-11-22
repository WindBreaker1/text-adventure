function dialogueBox(text) {
  const newElement = document.createElement('p')
  newElement.textContent = text;
}

// HTML DOM elements

const valueNumber = document.querySelector('#value')
const basicInput = document.querySelector('#input')
const nextButton = document.querySelector('#next-button')
const dialogueContainer = document.querySelector('#dialogue-container')
const progressBar = document.querySelector('.progress-bar')
const coinsText = document.querySelector('#coins-text')

const startButton = document.querySelector('.start-button')

// game shit
let coins = 0;

function startProgress() {
  startButton.disabled = false;
  let width = 0;

  let interval = setInterval(() => {
    if (width >= 100) {
      startButton.disabled = false;
      clearInterval(interval)
      coins++
      coinsText.innerText = `Coins: ${coins}`
      width = 0
      progressBar.style.width = width + '%'
    } else {
      startButton.disabled = true;
      width++
      progressBar.style.width = width + '%'
    }
  }, 10)
}

document.querySelector('.start-button').addEventListener('click', startProgress);




// text shit

let currentIndex = 0;

const dialogues = [
  '"Welcome, traveler! Are you here for the quest?"',
  '"The road ahead is perilous. Many have tried, but few succeeded."',
  '"Take this sword. It will guide you on your journey."',
  '"Good luck, brave soul!"'
]

const complexDialogue = [
  {index: 1, text: 'Welcome to the game!'},
  {index: 2, text: 'This is my second dialogue...'}
]

function showNextDialogue() {
  if (currentIndex < complexDialogue.length)  {
    const newDialogue = document.createElement('p');
    newDialogue.textContent = complexDialogue[currentIndex].text;
    dialogueContainer.appendChild(newDialogue);
    currentIndex++;
  }
}

nextButton.addEventListener('click', showNextDialogue)