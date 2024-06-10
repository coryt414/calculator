function add(inputNumber1, inputNumber2) {
    return inputNumber1 + inputNumber2;
};


function subtract(inputNumber1, inputNumber2) {
    return inputNumber1 - inputNumber2;
};


function multiply(inputNumber1, inputNumber2) {
    return inputNumber1 * inputNumber2;
};


function divide(inputNumber1, inputNumber2) {
    return inputNumber1 / inputNumber2;
};


const buttons = document.querySelectorAll("button");
let displayInput1 = document.querySelector(".display-input-1");
let displayOperator = document.querySelector(".display-input-operator");
let displayInput2 = document.querySelector(".display-input-2");
let displayOutput = document.querySelector(".display-output");
let expression = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
            if (button.parentElement.className === "numbers-container") {
                if (displayOperator.textContent === '') {
                    displayInput1.textContent += button.textContent;
                }
                else {
                    displayInput2.textContent += button.textContent;
                }
            }
            else if (button.parentElement.className === "operators-container") {
                let operator = button.textContent;
                let inputNumber1 = Number(displayInput1.textContent);
                displayOperator.textContent = operator;
                expression = [operator, inputNumber1]
                return expression
            }
            else if (button.parentElement.className === "equals-container") {
                let inputNumber2 = Number(displayInput2.textContent);
                expression.push(inputNumber2);
                console.log(expression)
                console.log( operate(expression[0],expression[1],expression[2]))
                displayOutput.textContent = operate(expression[0],expression[1],expression[2]);
            }
            else if (button.parentElement.className === 'clear-container') {
                displayInput1.textContent = '';
                displayOperator.textContent = '';
                displayInput2.textContent = '';
                inputNumber1 = '';
                operator = '';
                inputNumber2 = '';
            }
    })
});

function operate(operator, inputNumber1, inputNumber2) {
    switch (operator) {
        case '+':
            return add(inputNumber1, inputNumber2);
            
        case '-':
            return subtract(inputNumber1, inputNumber2);
            
        case '*':
            return multiply(inputNumber1, inputNumber2);
            
        case '/':
            return divide(inputNumber1, inputNumber2);
            
    }
}

//add = add(10,2);
//subtract = subtract(10,2);
//multiply = multiply(10,2);
//divide = divide(2, 5);
//operate = operate('/', 400,2);

//console.log(add, subtract, multiply, divide);
//console.log(operate);