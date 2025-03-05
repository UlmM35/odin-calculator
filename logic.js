function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a/b;
}

const firstNumber = 0;
const operation = "+";
const secondNumber = 0;

function operate(operation, firstNumber, secondNumber) {
    if (operation == "+") {
        return add(firstNumber, secondNumber);
    } else if (operation == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operation == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operation == "÷") {
        return divide(firstNumber, secondNumber) 
    }
}
