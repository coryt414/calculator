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
            return add(inputNumber1, inputNumber2);
            
        case '-':
            return subtract(inputNumber1, inputNumber2);
            
        case 'x':
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