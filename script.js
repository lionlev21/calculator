const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const c = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const ce = document.querySelector("#clear");
const input = document.querySelector(".input");
const history = document.querySelector(".history");
const equals = document.querySelector("#equals");
let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldResetScreen = false;
let result = 0;

function operate(a, b, operand) {
  a = Number(a);
  b = Number(b);
  switch (operand) {
    case "+": {
      return add(a, b);
    }
    case "-": {
      return subtract(a, b);
    }
    case "X": {
      return multiply(a, b);
    }
    case "÷": {
      if (b === 0) return null;
      else return divide(a, b);
    }
    default: {
      return null;
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
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}
function createNumber(number) {
  if (input.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
  if (input.clientWidth <= 300) {
    input.textContent += number;
  }
}

function resetScreen() {
  input.textContent = "";
  shouldResetScreen = false;
}
function clear() {
  input.textContent = "0";
  history.textContent = "0";
  firstNum = "";
  secondNum = "";
  currentOperator = null;
}
function addPoint() {
  if (shouldResetScreen) resetScreen();
  if (input.textContent === "") {
    input.textContent = "0";
  }
  if (!input.textContent.includes(".")) {
    input.textContent += ".";
  }
}
function deleteNumber() {
  input.textContent = input.textContent.toString().slice(0, -1);
}
function setOperation(operator) {
  if (currentOperator != null) evaluate();
  firstNum = input.textContent;
  currentOperator = operator;
  history.textContent = `${firstNum} ${currentOperator}`;
  shouldResetScreen = true;
}
function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;
  if (currentOperator === "÷" && input.textContent === "0") {
    alert("you cant divide by 0");
    return;
  }
  secondNum = input.textContent;
  input.textContent = roundResult(
    operate(firstNum, secondNum, currentOperator)
  );
  history.textContent = `${firstNum} ${currentOperator} ${secondNum}`;
  currentOperator = null;
}

ce.addEventListener("click", clear);
c.addEventListener("click", deleteNumber);
equals.addEventListener("click", evaluate);
dot.addEventListener("click", addPoint);
numbers.forEach((number) => {
  number.addEventListener("click", () => createNumber(number.textContent));
});
operators.forEach((op) => {
  op.addEventListener("click", () => setOperation(op.textContent));
});
