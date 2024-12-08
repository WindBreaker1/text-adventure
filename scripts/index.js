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
  {index: 1, cost: 5, text: `*Hello...*`},
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



/**
 * @description test
 */

const canvas = document.querySelector('#gridCanvas');
const ctx = canvas.getContext('2d');

const rows = 10;
const cols = 10;
const cellSize = 50; //pixels

function drawGrid() {
  ctx.strokeStyle = '#cccccc';
  for (let x = 0; x <= cols; x++) {
    ctx.beginPath();
    ctx.moveTo(x * cellSize, 0);
    ctx.lineTo(x * cellSize, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= rows; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * cellSize);
    ctx.lineTo(canvas.width, y * cellSize);
    ctx.stroke();
  }
}

drawGrid();

function drawEmoji(emoji, x, y) {
  ctx.font = `${cellSize * 0.8}px Arial`; // Font size relative to cell size
  ctx.textAlign = 'center'; // Center text horizontally
  ctx.textBaseline = 'middle'; // Center text vertically
  ctx.fillText(emoji, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
}


// Initial player position
let playerX = 0; // Player starts in column 0
let playerY = 0; // Player starts in row 0

function drawPlayer(x, y) {
  ctx.font = `${cellSize * 0.8}px Arial`; // Adjust font size relative to cell size
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🧍', x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
}

// Update the canvas
function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  drawGrid(); // Redraw the grid
  drawPlayer(playerX, playerY); // Draw the player at the current position
}


// Handle keyboard input
function handleKeyDown(event) {
  if (event.key === 'ArrowUp' && playerY > 0) {
    playerY--; // Move up
  } else if (event.key === 'ArrowDown' && playerY < rows - 1) {
    playerY++; // Move down
  } else if (event.key === 'ArrowLeft' && playerX > 0) {
    playerX--; // Move left
  } else if (event.key === 'ArrowRight' && playerX < cols - 1) {
    playerX++; // Move right
  }
  updateCanvas(); // Redraw the canvas with the updated position
}

// Initialize the game
document.addEventListener('keydown', handleKeyDown);
updateCanvas(); // Initial render

drawEmoji('🌲', 2, 3);
drawEmoji('🌲', 2, 4);
drawEmoji('🌲', 2, 5);
drawEmoji('⛰️', 5, 6);


// # light novel testing





// Story data structure
const story = {
  start: {
    text: "You wake up in a mysterious forest. What will you do?",
    choices: [
      { text: "Explore the forest", next: "explore" },
      { text: "Stay where you are", next: "stay" },
    ],
  },
  explore: {
    text: "You find a strange glowing orb. What will you do?",
    choices: [
      { text: "Touch the orb", next: "touch_orb" },
      { text: "Walk away", next: "test" },
    ],
  },
  test: {
    text: "This is a test!",
    choices: [
      { text: "Fuck", next: "" },
    ],
  },
  stay: {
    text: "You sit down and wait. Hours pass, and nothing happens. The end.",
    choices: [],
  },
  touch_orb: {
    text: "The orb grants you magical powers. You become a hero. The end.",
    choices: [],
  },
  walk_away: {
    text: "You walk away and find a way out of the forest. The end.",
    choices: [],
  },
};

// State variables
let currentScene = "start";

// Function to render the current scene
function renderScene() {
  const scene = story[currentScene];
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");

  // Display text
  textDiv.textContent = scene.text;

  // Clear previous choices
  choicesDiv.innerHTML = "";

  // Display choices
  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.classList.add("choice");
    button.addEventListener("click", () => {
      currentScene = choice.next;
      renderScene();
    });
    choicesDiv.appendChild(button);
  });
}

// Start the game
renderScene();
