// Import the WebAssembly module
import init, * as wasmModule from "rust-wasm-template";

// Global variable to hold the initialized wasm module
let wasm;

// Initialize the WebAssembly module
async function initWasm() {
  try {
    // Initialize the WebAssembly module
    await init();
    wasm = wasmModule;
    console.log("WebAssembly module initialized successfully:", wasm);

    // Setup the UI after WebAssembly is initialized
    setupUI();
  } catch (error) {
    console.error("Failed to initialize WebAssembly module:", error);
    document.body.innerHTML += `<div style="color: red; padding: 20px; background-color: #ffeeee; margin-top: 20px; border-radius: 8px;">
      <h3>Error Loading WebAssembly</h3>
      <p>${error.message}</p>
      <p>Please check the console for more details.</p>
    </div>`;
  }
}

// Setup the UI and event listeners
function setupUI() {
  console.log("Setting up UI");

  // Greeting functionality
  const greetButton = document.getElementById('greet-button');
  const nameInput = document.getElementById('name-input');
  const greetResult = document.getElementById('greet-result');

  console.log("Greeting elements:", { greetButton, nameInput, greetResult });

  if (greetButton) {
    greetButton.addEventListener('click', () => {
      console.log("Greet button clicked");
      const name = nameInput.value || 'stranger';
      console.log("Input name:", name);

      try {
        console.log("Available wasm functions:", Object.keys(wasm));

        if (typeof wasm.greet === 'function') {
          console.log("Calling wasm.greet with:", name);
          const result = wasm.greet(name);
          console.log("Greet result:", result);
          greetResult.textContent = result;
          greetResult.style.color = '#4CAF50';
        } else {
          console.error("wasm.greet is not a function");
          greetResult.textContent = "Error: wasm.greet is not a function";
          greetResult.style.color = 'red';
        }
      } catch (e) {
        console.error("Error in greet function:", e);
        greetResult.textContent = `Error: ${e}`;
        greetResult.style.color = 'red';
      }
    });
  } else {
    console.error("Greet button not found in the DOM");
  }
}

// Wait for the DOM to be loaded before initializing WebAssembly
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded, initializing WebAssembly...");
  initWasm();
});
