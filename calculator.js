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


let inputNumber1 = ''
let inputNumber2 = ''
let operator = ''

function operate(operator, inputNumber1, inputNumber2) {
    switch (operator) {
        case '+':
            add(inputNumber1, inputNumber2);
            break;
        case '-':
            subtract(inputNumber1, inputNumber2);
            break;
        case '*':
            multiply(inputNumber1, inputNumber2);
            break;
        case '/':
            divide(inputNumber1, inputNumber2);
            break;
    }
}

add = add(10,2);
subtract = subtract(10,2);
multiply = multiply(10,2);
divide = divide(2, 5);

console.log(add, subtract, multiply, divide)