function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let num1 = 0;
let num2 = 0;
let rator = "";

function operate(num1, num2, rator){
    if(rator === "+") return add(num1, num2);
    else if(rator === "-") return subtract(num1, num2);
    else if(rator === "*") return multiply(num1, num2);
    else if(rator === "/") return divide(num1, num2);
}

let displayValue = document.querySelector('h1');
 
// numbers

const one = document.querySelector("#one");
one.addEventListener('click', (event) =>{
    displayValue.innerHTML +=  1;
})

const two = document.querySelector('#two');
two.addEventListener('click', (event) =>{
    displayValue.textContent += 2;
})

const three = document.querySelector("#three");
three.addEventListener('click', (event) =>{
    displayValue.textContent +=  3;
})

const four = document.querySelector('#four');
four.addEventListener('click', (event) =>{
    displayValue.textContent += 4;
})

const five = document.querySelector("#five");
five.addEventListener('click', (event) =>{
    displayValue.textContent +=  5;
})

const six = document.querySelector('#six');
six.addEventListener('click', (event) =>{
    displayValue.textContent += 6;
})

const seven = document.querySelector("#seven");
seven.addEventListener('click', (event) =>{
    displayValue.textContent +=  7;
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', (event) =>{
    displayValue.textContent += 8;
})

const nine = document.querySelector("#nine");
nine.addEventListener('click', (event) =>{
    displayValue.textContent +=  9;
})

const zero = document.querySelector('#zero');
zero.addEventListener('click', (event) =>{
    displayValue.textContent += 0;
})

// operators

const plus = document.querySelector("#add");
plus.addEventListener('click', (event) =>{
    displayValue.textContent +=  " + ";
})

const minus = document.querySelector('#subtract');
minus.addEventListener('click', (event) =>{
    displayValue.textContent += " - ";
})

const multi = document.querySelector("#multiply");
multi.addEventListener('click', (event) =>{
    displayValue.textContent +=  " * ";
})

const divid = document.querySelector('#divide');
divid.addEventListener('click', (event) =>{
    displayValue.textContent += " / ";
})

const equals = document.querySelector("#equals");
equals.addEventListener('click', (event) =>{
    let display = displayValue.textContent;
    const arr = display.split(' ');
    num1 = Number(arr[0]);
    num2 = Number(arr[2]);
    rator = arr[1];
    displayValue.textContent = num1 = operate(num1, num2, rator);
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', (event) => {
    displayValue.textContent = null;
    num1 = 0;
})

console.log(displayValue.textContent);