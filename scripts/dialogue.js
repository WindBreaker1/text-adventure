export function dialogueBox(text) {
  const newElement = document.createElement('p')
  newElement.textContent = text;
  document.body.append(newElement)
}
