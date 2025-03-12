// Import the WebAssembly module
import * as wasm from "rust-wasm-template";

// Add listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Greeting functionality
  const greetButton = document.getElementById('greet-button');
  const nameInput = document.getElementById('name-input');
  const greetingOutput = document.getElementById('greeting-output');

  greetButton.addEventListener('click', () => {
    const name = nameInput.value || 'stranger';
    try {
      const result = wasm.greet(name);
      greetingOutput.textContent = result;
    } catch (e) {
      greetingOutput.textContent = `Error: ${e}`;
    }
  });

  // Fibonacci functionality
  const fibonacciButton = document.getElementById('fibonacci-button');
  const fibonacciInput = document.getElementById('fibonacci-input');
  const fibonacciOutput = document.getElementById('fibonacci-output');

  fibonacciButton.addEventListener('click', () => {
    const n = parseInt(fibonacciInput.value);
    if (isNaN(n) || n < 0) {
      fibonacciOutput.textContent = 'Please enter a valid non-negative number';
      return;
    }
    if (n > 40) {
      fibonacciOutput.textContent = 'Number too large (max 40)';
      return;
    }

    try {
      const startTime = performance.now();
      const result = wasm.fibonacci(n);
      const endTime = performance.now();
      fibonacciOutput.textContent = `Fibonacci(${n}) = ${result} (calculated in ${(endTime - startTime).toFixed(2)}ms)`;
    } catch (e) {
      fibonacciOutput.textContent = `Error: ${e}`;
    }
  });

  // Addition functionality
  const addButton = document.getElementById('add-button');
  const addInputA = document.getElementById('add-input-a');
  const addInputB = document.getElementById('add-input-b');
  const addOutput = document.getElementById('add-output');

  addButton.addEventListener('click', () => {
    const a = parseInt(addInputA.value);
    const b = parseInt(addInputB.value);

    if (isNaN(a) || isNaN(b)) {
      addOutput.textContent = 'Please enter valid numbers';
      return;
    }

    try {
      const result = wasm.add(a, b);
      addOutput.textContent = `${a} + ${b} = ${result}`;
    } catch (e) {
      addOutput.textContent = `Error: ${e}`;
    }
  });
});
