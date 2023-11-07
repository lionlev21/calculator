const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const c = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const ce = document.querySelector("#clear");
const input = document.querySelector(".input");
const history = document.querySelector(".history");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;
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
c.addEventListener("click", () => {
  if (input.textContent.length === 1) {
    input.textContent = "0";
  } else {
    input.textContent = input.textContent.slice(
      0,
      input.textContent.length - 1
    );
  }
});
ce.addEventListener("click", () => {
  input.textContent = "0";
  history.textContent = " ";
  firstNum = 0;
  secondNum = 0;
});
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (input.textContent === "0") {
      input.textContent = number.textContent;
    } else {
      input.textContent = input.textContent.concat(number.textContent);
    }
  });
});
dot.addEventListener(
  "click",
  () => (input.textContent = input.textContent + dot.textContent)
);
