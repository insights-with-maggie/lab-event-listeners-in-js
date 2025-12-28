// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById("textInput");
  const textInputDisplay = document.getElementById("textInputDisplay");
  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton");
  const resetColorButton = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBackgroundColor);
  }

  if (resetColorButton) {
    resetColorButton.addEventListener("dblclick", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);

// Export functions for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};