let inputField = document.getElementById("input");
let resultField = document.getElementById("result");

// Add to display
function append(value) {
  inputField.value += value;
  showResult();
}

// Clear display
function clearDisplay() {
  inputField.value = "";
  resultField.textContent = "";
}

// Remove last character
function backspace() {
  inputField.value = inputField.value.slice(0, -1);
  showResult();
}

// Calculate result
function calculateResult() {
  try {
    let result = eval(inputField.value);
    inputField.value = result;
    resultField.textContent = "";
  } catch {
    resultField.textContent = "Error";
  }
}

// Show real-time result
function showResult() {
  try {
    if (inputField.value !== "") {
      let result = eval(inputField.value);
      resultField.textContent = result;
    } else {
      resultField.textContent = "";
    }
  } catch {
    resultField.textContent = "";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    append(key);
  } else if (key === "Enter") {
    event.preventDefault(); // Prevent form submission or newline
    calculateResult();
  } else if (key === "Backspace") {
    event.preventDefault();
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
