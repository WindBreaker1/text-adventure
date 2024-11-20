function dialogueBox(text) {
  const newElement = document.createElement('p')
  newElement.textContent = text;
}

const valueNumber = document.querySelector('#value')
const basicInput = document.querySelector('#input')
const basicButton = document.querySelector('#button')
const dialogueContainer = document.getElementById('dialogue-container')

let currentIndex = 0;

const dialogues = [
  '"Welcome, traveler! Are you here for the quest?"',
  '"The road ahead is perilous. Many have tried, but few succeeded."',
  '"Take this sword. It will guide you on your journey."',
  '"Good luck, brave soul!"'
]
