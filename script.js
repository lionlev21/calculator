const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const c = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const ce = document.querySelector("#clear");
const input = document.querySelector(".input");
const history = document.querySelector(".history");
const equals = document.querySelector("#equals");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let operators = Array.from(operands);
let result = 0;
console.log(operators);
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
  operator = "";
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
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    firstNum = Number(input.textContent);
    operators.forEach((op) => {
      op.style.backgroundColor = "white";
    });
    // Set the clicked operand to green
    operand.style.backgroundColor = "#38b43e";
    operator = operand.textContent;
    numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (input.textContent === "0") {
          input.textContent = number.textContent;
        } else {
          input.textContent = input.textContent.concat(number.textContent);
        }
      });
    });
  });
});
equals.addEventListener("click", () => {
  operators.forEach((op) => {
    op.style.backgroundColor = "white";
  });
  secondNum = Number(input.textContent);
  result = operate(firstNum, secondNum, operator);
  firstNum = result;
  secondNum = 0;
  operator = "";
  input.textContent = String(firstNum);
});
