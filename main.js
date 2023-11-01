let number1 = 0;
let number2 = 0;
let operator;
let operatorClicked = false;


function add(number1, number2){
    return number1 + number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(number1, number2){
    switch (operator) {
        case "+": return add(number1, number2);
        case "-": return subtract(number1, number2);
        case "*": return multiply(number1, number2);
        case "/": return divide(number1, number2);
    }
};

const numberButtons = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear")

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(input.textContent === "0"){
        input.textContent = button.innerHTML;
    } else {
        input.textContent += button.innerHTML
    };
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(output.textContent !== ""){
            input.textContent = output.textContent
            output.textContent = "";
            operatorClicked = false;
        }
        operator = button.innerHTML;
        updateDisplay();
        operatorClicked = true;
        
    })
});

equalButton.addEventListener("click", () => {
    if(operator === undefined){
        output.textContent = input.innerHTML;
    } else {
        getValues()
        output.textContent = operate(number1, number2)   
    };
});

clearButton.addEventListener("click", clear);

function updateDisplay(){
    if(operatorClicked === false){
        input.textContent += operator;
        console.log(operator)
    }
    };

function getValues(){
    values = input.textContent.split(operator);
    number1 = Number(values[0]);
    number2 = Number(values[1]);
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    input.textContent = "";
    output.textContent = "";
}

