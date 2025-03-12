# 🦀 Rust WebAssembly Template

![Rust + WebAssembly](https://rustwasm.github.io/assets/rust-wasm.png)

A modern template for building high-performance web applications using Rust and WebAssembly (WASM). This template provides a solid foundation for creating web applications that leverage Rust's performance and safety features while integrating seamlessly with JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Rust](https://img.shields.io/badge/Rust-1.70%2B-orange)](https://www.rust-lang.org/)
[![wasm-pack](https://img.shields.io/badge/wasm--pack-0.10%2B-brightgreen)](https://github.com/rustwasm/wasm-pack)

## 📋 Table of Contents

- [🦀 Rust WebAssembly Template](#-rust-webassembly-template)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🔧 Prerequisites](#-prerequisites)
  - [🚀 Getting Started](#-getting-started)
    - [Using this Template](#using-this-template)
  - [📁 Project Structure](#-project-structure)
  - [🔄 Development Workflow](#-development-workflow)
  - [📦 Building for Production](#-building-for-production)
  - [🧪 Testing](#-testing)
    - [Testing Rust Code](#testing-rust-code)
    - [Testing WebAssembly](#testing-webassembly)
  - [🧩 Adding New Rust Functions](#-adding-new-rust-functions)
  - [🎨 Customizing the Web Interface](#-customizing-the-web-interface)
  - [⚡ Performance Considerations](#-performance-considerations)
  - [📄 License](#-license)

## ✨ Features

- **Rust + WebAssembly Integration**: Write high-performance code in Rust that runs in the browser
- **Modern JavaScript Setup**: Webpack-based build system for the web interface
- **Hot Reloading**: Development server with automatic reloading
- **Example Functions**: Includes sample Rust functions exposed to JavaScript
- **Testing Infrastructure**: Built-in testing for both Rust and WebAssembly
- **Optimized Builds**: Configuration for optimized WebAssembly production builds


## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install) (1.70 or newer)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) (0.10 or newer)
- [Node.js](https://nodejs.org/) (14 or newer)
- [npm](https://www.npmjs.com/) (6 or newer)

## 🚀 Getting Started

### Using this Template

1. Click the "Use this template" button on GitHub or clone the repository:

```bash
git clone https://github.com/manonja/rust-wasm-template.git
cd rust-wasm-template
```

2. Build the WebAssembly package:

```bash
wasm-pack build --target web
```

3. Install JavaScript dependencies and start the development server:

```bash
cd web
npm install
npm start
```

4. Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
rust-wasm-template/
├── src/                  # Rust source code
│   └── lib.rs            # Main Rust library with WebAssembly exports
├── web/                  # Web interface
│   ├── src/
│   │   ├── index.html    # HTML template
│   │   └── index.js      # JavaScript entry point
│   ├── package.json      # JavaScript dependencies
│   └── webpack.config.js # Webpack configuration
├── Cargo.toml            # Rust dependencies and configuration
└── README.md             # This file
```

## 🔄 Development Workflow

1. **Write Rust code** in the `src/` directory
2. **Build WebAssembly module**:

```bash
wasm-pack build --target web
```

3. **Start the development server**:

```bash
cd web
npm start
```

4. **Make changes** to your Rust or JavaScript code
5. **Rebuild** the WebAssembly module when you change Rust code
6. The development server will **automatically reload** when you change JavaScript or HTML

## 📦 Building for Production

To create an optimized production build:

```bash
# Build optimized WebAssembly
wasm-pack build --target web --release

# Build the web application
cd web
npm run build
```

The production-ready files will be available in the `web/dist` directory.

## 🧪 Testing

### Testing Rust Code

```bash
cargo test
```

### Testing WebAssembly

```bash
wasm-pack test --node
```

## 🧩 Adding New Rust Functions

1. Add your function to `src/lib.rs`:

```rust
#[wasm_bindgen]
pub fn my_new_function(param: u32) -> u32 {
    // Your implementation here
    param * 2
}
```

2. Rebuild the WebAssembly module:

```bash
wasm-pack build --target web
```

3. Use the function in JavaScript (`web/src/index.js`):

```javascript
import * as wasm from "rust-wasm-template";

// Use your new function
const result = wasm.my_new_function(42);
console.log(result);
```

## 🎨 Customizing the Web Interface

The web interface is a standard webpack project. You can:

- Add new HTML elements to `web/src/index.html`
- Modify the JavaScript in `web/src/index.js`
- Add CSS styles directly in the HTML or as separate files
- Install additional npm packages as needed

## ⚡ Performance Considerations

- WebAssembly excels at computationally intensive tasks
- For optimal performance, minimize data transfer between JavaScript and WebAssembly
- Use appropriate data types to avoid unnecessary conversions
- Consider using `wee_alloc` for smaller WebAssembly binaries (already configured)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
