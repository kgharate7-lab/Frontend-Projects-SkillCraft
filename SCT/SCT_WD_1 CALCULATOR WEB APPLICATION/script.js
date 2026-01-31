let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    // If error is shown, start fresh
    if (display.value === "Error") {
        display.value = "";
    }

    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "*", "/"];

    // Prevent two operators in a row
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        // Avoid empty calculation
        if (display.value.trim() === "") return;

        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch {
        display.value = "Error";
    }
}

// Keyboard input handling
document.addEventListener("keydown", function (event) {
    const allowedKeys = "0123456789+-*/.";

    if (allowedKeys.includes(event.key)) {
        appendValue(event.key);
    }

    if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
    }

    if (event.key === "Backspace") {
        deleteLast();
    }

    if (event.key === "Escape") {
        clearDisplay();
    }
});