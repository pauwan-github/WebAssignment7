// Runtime Error
function divide(a, b) {
    return a / b;
}

console.log(divide(10, undefined)); // NaN (Not a Number)

// Debugging: Check for undefined values
function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero");
        return null; // Handle error
    }
    return a / b;
}
