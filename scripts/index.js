// # HTML DOM elements

// id elements
const nextButton = document.querySelector('#next-button')
const dialogueContainer = document.querySelector('#dialogue-container')
const progressBar = document.querySelector('.progress-bar')
const lifeText = document.querySelector('#life-text')

// class elements
const startButton = document.querySelector('.start-button')

// # idle game logic

// values
let life = 0;
let progressInterval = 10;

/**
 * @description starts the progress for incrementing life by 1
 * @returns {number} 1 life
 * @todo need to add error catches
 */

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

class Upgrade {
  constructor(title, cost) {
    this.title = title;
    this.cost = cost;
  }
}

const upgradeOne = new Upgrade("Upgrade One", 3);
const upgradeTwo = new Upgrade("Upgrade Two", 5);
const upgradeThree = new Upgrade("Upgrade Three", 10);
const upgradeFour = new Upgrade("Upgrade Four", 15);

const upgradeOneButton = document.querySelector("#upgrade-one");

function buyUpgradeOne() {
  if (life >= upgradeOne.cost) {
    life -= upgradeOne.cost
    lifeText.innerText = `Life: ${life}`
    upgradeOneButton.disabled = true;
    progressInterval = 5;
  }
}

upgradeOneButton.addEventListener('click', buyUpgradeOne);

const upgradeTwoButton = document.querySelector('#upgrade-two').addEventListener('click', () => {
  if (life >= upgradeTwo.cost) {
    life -= upgradeTwo.cost
    lifeText.innerText = `Life: ${life}`
    this.disabled = true;
    progressInterval = 2.5;
  }
})

// text-box & story logic

let currentIndex = 0;

class Dialogue {
  constructor(index, cost, text) {
    this.index = index;
    this.cost = cost;
    this.text = text;
  }
}

const complexDialogue = [
  new Dialogue(0, 5, `The prototype!`),
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
    dialogueContainer.insertBefore(newDialogue, dialogueContainer.firstChild);
    currentIndex++;
  }
}

nextButton.addEventListener('click', showNextDialogue)