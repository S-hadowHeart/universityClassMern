export const add = (a, b) => a + b;
export const multiply = (x, y) => x * y;
export const square = (n) => n * n;
export const greet = (name) => `Hello, ${name}!`;
export const subtract = (a, b) => a - b;
export const divide = (x, y) => {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
}