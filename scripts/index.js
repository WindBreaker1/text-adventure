// HTML DOM elements

// id elements
const nextButton = document.querySelector('#next-button')
const dialogueContainer = document.querySelector('#dialogue-container')
const progressBar = document.querySelector('.progress-bar')
const lifeText = document.querySelector('#life-text')

// class elements
const startButton = document.querySelector('.start-button')

// idle game logic
let life = 0;
let progressInterval = 10;

function startProgress() {
  startButton.disabled = false;
  let width = 0;

  let interval = setInterval(() => {
    if (width >= 100) {
      startButton.disabled = false;
      clearInterval(interval)
      life++
      lifeText.innerText = `Life: ${life}`
      width = 0
      progressBar.style.width = width + '%'
    } else {
      startButton.disabled = true;
      width++
      progressBar.style.width = width + '%'
    }
  }, progressInterval)
}

document.querySelector('.start-button').addEventListener('click', startProgress);

// upgrades

const upgradeOneButton = document.querySelector("#upgrade-one");

let upgradeOne = {
  cost: 3
}

function buyUpgradeOne() {
  if (life >= upgradeOne.cost) {
    life -= upgradeOne.cost
    lifeText.innerText = `Life: ${life}`
    progressInterval = 5;
    upgradeOneButton.disabled = true;
  }
}

upgradeOneButton.addEventListener('click', buyUpgradeOne);

// text-box & story logic

let currentIndex = 0;

const complexDialogue = [
  {index: 1, cost: 5, text: `Hello...`},
  {index: 2, cost: 5, text: `Hello... world?`},
  {index: 3, cost: 5, text: `Nah, that's too on the nose.`},
  {index: 4, cost: 5, text: `Where am I?`},
  {index: 5, cost: 5, text: `Who am I?`},
  {index: 6, cost: 5, text: `I see something...`},
  {index: 7, cost: 5, text: `It's green... it's grass!`},
  {index: 8, cost: 5, text: `And that's a tree!`},
  {index: 9, cost: 5, text: `And that's... what is that big, hairy blob?`},
  {index: 10, cost: 5, text: `Upon closer inspection, that's a human.`},
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