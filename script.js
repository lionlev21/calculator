const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const c = document.querySelector("#delete");
const dot = document.querySelector("#dot");
const ce = document.querySelector("#clear");
const input = document.querySelector(".input");
const history = document.querySelector(".history");
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");
let firstNum = "";
let secondNum = "";
let operator = "";
let operators = Array.from(operands);
let lastOperator = "";
let operatorFlag = false;
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
function changeToWhite() {
  operators.forEach((op) => {
    op.style.backgroundColor = "white";
  });
}

c.addEventListener("click", () => {
  if (input.textContent.length === 1 || Number(lastNumberString) === NaN) {
    if (!operatorFlag) {
      firstNum = firstNum.slice(0, firstNum.length - 1);
    } else {
      secondNum = secondNum.slice(0, secondNum.length - 1);
    }
    input.textContent = 0;
    history.textContent = "";
  } else {
    input.textContent = input.textContent.slice(
      0,
      input.textContent.length - 1
    );
    lastNumberString = input.textContent;
  }
  changeToWhite();
});
ce.addEventListener("click", () => {
  input.textContent = 0;
  history.textContent = " ";
  firstNum = "0";
  secondNum = "0";
  operator = "";
  operatorFlag = false;
  changeToWhite();
});
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (input.clientWidth >= 300) {
      alert("You reached the number limit");
    } else {
      if (!operatorFlag) {
        if (input.textContent === "0") {
          firstNum = number.textContent;
          input.textContent = number.textContent;
          lastNumberString = number.textContent;
        } else {
          firstNum = firstNum.concat(number.textContent);
          input.textContent = input.textContent.concat(number.textContent);
          lastNumberString = lastNumberString.concat(number.textContent);
        }
      } else {
        if (input.textContent === firstNum || input.textContent === result) {
          secondNum = number.textContent;
          input.textContent = number.textContent;
          lastNumberString = number.textContent;
        } else {
          secondNum = secondNum.concat(number.textContent);
          input.textContent = input.textContent.concat(number.textContent);
          lastNumberString = lastNumberString.concat(number.textContent);
        }
      }
      changeToWhite();
    }
  });
});

dot.addEventListener("click", () => {
  if (input.textContent.includes(".")) {
    alert("You cant put more than one point at a number");
  } else {
    if (!operatorFlag) {
      firstNum = firstNum + dot.textContent;
    } else {
      secondNum = secondNum + dot.textContent;
    }
    input.textContent = input.textContent + dot.textContent + "";
  }
});
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    operatorFlag = true;
    if (secondNum != "") {
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);
      result = operate(firstNum, secondNum, operator);
      input.textContent = result;
      if (input.clientHeight == 96) {
        result = roundResult(result);
        input.textContent = result;
      }
      history.textContent = input.textContent.concat("", operand.textContent);
      firstNum = String(result);
      secondNum = "";
    } else {
      history.textContent = firstNum.concat("", operand.textContent);
      if (secondNum === "0") {
        input.textContent = firstNum;
      } else {
        input.textContent = secondNum;
      }
    }
    changeToWhite();
    operand.style.backgroundColor = "#38b43e";
    operator = operand.textContent;
  });
});
equals.addEventListener("click", () => {
  if (operator === "") {
    input.textContent = firstNum;
  } else {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    result = operate(firstNum, secondNum, operator);
    input.textContent = result;
    if (input.clientHeight == 96) {
      result = roundResult(result);
      input.textContent = result;
    }
    history.textContent = "";
    operator = "";
    lastOperator = "";
    firstNum = String(result);
    secondNum = "0";
  }
  operatorFlag = false;
  changeToWhite();
});
