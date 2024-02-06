const colorBox = document.getElementById("color-box");
const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const redValueSpan = document.getElementById("redvalue");
const greenValueSpan = document.getElementById("greenvalue");
const blueValueSpan = document.getElementById("bluevalue");
const copyButton = document.getElementById("copyButton");
const inputTypeValue = document.getElementById("input-type");

// Function to update the color and values when a slider changes
function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Update the background color of the color box
  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Update the value spans
  redValueSpan.textContent = red;
  greenValueSpan.textContent = green;
  blueValueSpan.textContent = blue;
}

// Add event listeners to the sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Function to copy the RGB value to the clipboard
function copyRGBValue() {
  const rgbValue = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
  navigator.clipboard.writeText(rgbValue)
    .then(() => {
      inputTypeValue.textContent = "RGB value copied!";
    })
    .catch((error) => {
      inputTypeValue.textContent = "Failed to copy.";
    });
}

// Add event listener to the copy button
copyButton.addEventListener("click", copyRGBValue);

// Initial color display
updateColor();
