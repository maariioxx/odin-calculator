let number1 = 0;
let number2 = 0;
let operator;
let operatorClicked = false;
let decimalClicked = false;


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
    if(number2 == "0"){
        return "Can't divide by 0. Please clear"
    } else {
    return number1 / number2;
    }
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
const decimalButton = document.querySelector(".decimalPoint");
const deleteButton = document.querySelector(".delete");


function getNumberButtons(button){
    if(input.textContent === "0"){
        input.textContent = button.id;
    } else {
        input.textContent += button.id;
    };
};


function getOperatorButtons(button){
    if(output.textContent !== ""){ /* If there's already been an operation */
        input.textContent = output.textContent
        output.textContent = "";
        operatorClicked = false;
        decimalClicked = false;
    };
    operator = button.id;
    updateDisplay();
    operatorClicked = true;
    decimalClicked = false;
};

function getDecimalButton(){
    if ((operatorClicked === true && decimalClicked === false) || decimalClicked  === false){
            input.textContent += ".";
            decimalClicked = true;
    };    
};

function getEqualButton(){
    if(operator === undefined){
        if(input.innerHTML.split(".")[1] == ""){
            output.textContent = input.innerHTML.split(".")[0];
        } else{
            output.textContent = input.innerHTML;
        }
    }  else {
        getValues()
        output.textContent = operate(number1, number2)   
    };   
};


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        getNumberButtons(button);
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        getOperatorButtons(button);
    })
});

decimalButton.addEventListener("click", getDecimalButton);

equalButton.addEventListener("click", getEqualButton);

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", deleteInput());


function updateDisplay(){
    if(operatorClicked === false){
        input.textContent += operator;
    }
};

function getValues(){
    values = input.textContent.split(operator);
    if(values[0] === "."){
        number1 = 0
    } else {
        number1 = Number(values[0]);
    };
    if(values[1] === "."){
        number2 = 0
    } else {
        number2 = Number(values[1]);
    };
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    input.textContent = "";
    output.textContent = "";
    operatorClicked = false;
    decimalClicked = false;
};

function deleteInput(){
    input.textContent = input.textContent.slice(0, -1);
};


 window.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[id="${e.key}"]`);
    console.log(key)
    if(key.classList.contains("number")){
        getNumberButtons(key);
    } else if(key.classList.contains("operator")){
        getOperatorButtons(key);
    } else if(key.classList.contains("decimalPoint")) {
        getDecimalButton();
    } else if(key.classList.contains("equal")){
        getEqualButton();
    } else if(key.classList.contains("clear")){
        clear();
    } else if(key.classList.contains("delete")){
        deleteInput();
    }
});
/* redondear si hay muchos decimales */
