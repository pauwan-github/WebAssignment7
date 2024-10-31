// Logical Error
function add(a, b) {
    return a - b; // Incorrect operation
}

console.log(add(2, 3)); // Outputs -1

// Debugging: Ensure correct logic
function add(a, b) {
    return a + b; // Fixed: Correct operation
}

console.log(add(2, 3)); // Outputs 5
