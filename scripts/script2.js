import values from './index.js'
import { dialogueBox } from './dialogue.js';

const valueNumber = document.querySelector('#value')
const basicInput = document.querySelector('#input')
const basicButton = document.querySelector('#button')

basicInput.addEventListener('input', (event) => {
  valueNumber.innerHTML = basicInput.value
  values.number = basicInput.value
  console.log(values.number)
});

let dialogueTree = [
  dialogueBox("What is your name?"),
  dialogueBox("My name is AM.")
]

basicButton.addEventListener('click', () => {
  for (let i = 0; i < dialogueTree.length; i++) {
    console.log(dialogueTree[i]);
  }
})

// coomment

const dialogueContainer = document.getElementById('dialogue-container');
const nextButton = document.getElementById('next-dialogue');

// Define the dialogue tree as an array
const dialogues = [
  '"Welcome, traveler! Are you here for the quest?"',
  '"The road ahead is perilous. Many have tried, but few succeeded."',
  '"Take this sword. It will guide you on your journey."',
  '"Good luck, brave soul!"'
];

const dialoguesWithChoices = [
  { text: '"Are you here for the quest?"', choices: ["Yes", "No"] },
  { text: '"Take this sword, then."', choices: null },
  { text: '"Come back when you are ready."', choices: null },
];


// Keep track of the current dialogue index
let currentIndex = 0;

// Function to display the next dialogue
function showNextDialogue() {
  // Check if there are more dialogues to show
  if (currentIndex < dialogues.length) {
    // Create a new <p> element for the next dialogue
    const newDialogue = document.createElement('p');
    newDialogue.textContent = dialogues[currentIndex];
    dialogueContainer.appendChild(newDialogue); // Append the new dialogue
    currentIndex++; // Move to the next dialogue
  } else {
    // If no more dialogues, disable the button and show a message
    basicButton.textContent = 'The End';
    basicButton.disabled = true;
  }
}

function typeDialogue(text, element) {
  let index = 0;
  const interval = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index === text.length) clearInterval(interval);
  }, 50);
}

function showNextDialogueWithTyping() {
  if (currentIndex < dialogues.length) {
    const newDialogue = document.createElement('p');
    dialogueContainer.appendChild(newDialogue);
    typeDialogue(dialogues[currentIndex], newDialogue);
    currentIndex++;
  }
}

basicButton.addEventListener('click', showNextDialogueWithTyping);
