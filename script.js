function operate(a, b, operand) {
  switch (operand) {
    case "+": {
      return add(a, b);
    }
    case "-": {
      return subtract(a, b);
    }
    case "*": {
      return multiply(a, b);
    }
    case "/": {
      return divide(a, b);
    }
    case "^": {
      return getSquare(a, b);
    }
  }
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function getSquare(a, b) {
  return Math.pow(a, b);
}
