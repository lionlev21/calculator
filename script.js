const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const c = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const ce = document.querySelector("#clear");
const input = document.querySelector(".input");
const history = document.querySelector(".history");
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");
let firstNum = 0;
let secondNum;
let operator = "";
let operators = Array.from(operands);
let lastOperator = "";
let result = 0;
console.log(display.clientWidth);
console.log(input.clientWidth);
function operate(a, b, operand) {
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
    input.textContent = 0;
    history.textContent = 0;
  } else {
    input.textContent = input.textContent.slice(
      0,
      input.textContent.length - 1
    );
  }
});
ce.addEventListener("click", () => {
  input.textContent = 0;
  history.textContent = " ";
  firstNum = 0;
  secondNum = 0;
  operator = "";
});
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (input.textContent === "0") {
      input.textContent = number.textContent;
    } else {
      input.textContent = input.textContent.concat(number.textContent);
    }

    operators.forEach((op) => {
      op.style.backgroundColor = "white";
    });
  });
});

dot.addEventListener("click", () => {
  if (input.textContent.includes(".")) {
    alert("You cant put more than one point at a number");
  } else {
    input.textContent = input.textContent + dot.textContent;
  }
});
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    firstNum = input.textContent;
    history.textContent = input.textContent.concat(" ", operand.textContent);
    input.textContent = 0;
    lastOperator = operand;
    operators.forEach((op) => {
      op.style.backgroundColor = "white";
    });
    operand.style.backgroundColor = "#38b43e";
    operator = operand.textContent;
  });
});
equals.addEventListener("click", () => {
  secondNum = input.textContent;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  result = operate(firstNum, secondNum, operator);
  input.textContent = result;
  history.textContent = "";
  firstNum = result;
  secondNum = 0;
});
