use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// Import JavaScript functions
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// Export a function to JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    let message = format!("Hello, {}! Welcome to Rust and WebAssembly!", name);
    log(&message); // Log to JavaScript console
    message
}

// Unit tests
#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::*;

    #[test]
    #[wasm_bindgen_test]
    fn test_greet() {
        assert_eq!(
            greet("Test"),
            "Hello, Test! Welcome to Rust and WebAssembly!"
        );
    }
}
