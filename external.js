//variable declaration

let num1 = 0;
let num2 = 0;
let rator = "";
const array = [];
let operator = true;
let displayValue = document.querySelector('#screen');


//functions of calculation
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

function modulo(a,b){
    return a % b;
}

function operate(num1, num2, rator){
    if(rator === "+") return add(num1, num2);
    else if(rator === "-") return subtract(num1, num2);
    else if(rator === "*") return multiply(num1, num2);
    else if(rator === "/") return divide(num1, num2);
    else if(rator === "%") return modulo(num1, num2);
}
 
// numbers

const one = document.querySelector("#one");
one.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 1;
            operator = false;
        }else displayValue.innerHTML +=  1;
    }
})

const two = document.querySelector('#two');
two.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 2;
            operator = false;
        }else displayValue.innerHTML +=  2;
    }
})

const three = document.querySelector("#three");
three.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 3;
            operator = false;
        }else displayValue.innerHTML +=  3;
    }
})

const four = document.querySelector('#four');
four.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 4;
            operator = false;
        }else displayValue.innerHTML +=  4;
    }
})

const five = document.querySelector("#five");
five.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 5;
            operator = false;
        }else displayValue.innerHTML +=  5;
    }
})

const six = document.querySelector('#six');
six.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 6;
            operator = false;
        }else displayValue.innerHTML +=  6;
    }
})

const seven = document.querySelector("#seven");
seven.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 7;
            operator = false;
        }else displayValue.innerHTML +=  7;
    }
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 8;
            operator = false;
        }else displayValue.innerHTML +=  8;
    }
})

const nine = document.querySelector("#nine");
nine.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 9;
            operator = false;
        }else displayValue.innerHTML +=  9;
    }
})

const zero = document.querySelector('#zero');
zero.addEventListener('click', (event) =>{
    if(displayValue.textContent.length < 11){
        if(operator) {
            displayValue.innerHTML = 0;
            operator = false;
        }else displayValue.innerHTML +=  0;
    }
})

// operators


const plus = document.querySelector("#add");
plus.addEventListener('click', (event) =>{
    let display = displayValue.textContent;
    array.push(display);
    if(array[array.length - 1] !== "+"){
        if(array.length === 3){
            num1 = Number(array[0]);
            num2 = Number(array[2]);
            rator = array[1];
            displayValue.textContent = operate(num1, num2, rator).toPrecision(9);
            array.splice(0, array.length);
            array.push(displayValue.textContent);
        }
        array.push("+");
        operator = true;
    }else array.pop();
});

const equals = document.querySelector("#equals");
equals.addEventListener('click', (event) =>{
    if(array.length < 2){
        displayValue.textContent = "Math Error";
    }else{
        let display = displayValue.textContent;
        num2 = Number(display);
        num1 = Number(array[0]);
        rator = array[1];
        if(num2 === 0 && (rator === "/" || rator === "%")){
            displayValue.textContent = "Moron";
            operator = true;
        } else {
            displayValue.textContent = operate(num1, num2, rator).toPrecision(6);
        }
        array.splice(0, array.length);
    }
    operator = true;
});

const minus = document.querySelector('#subtract');
minus.addEventListener('click', (event) =>{
    let display = displayValue.textContent;
    array.push(display);
    if(array[array.length - 1] !== "-"){
        if(array.length === 3){
            num1 = Number(array[0]);
            num2 = Number(array[2]);
            rator = array[1];
            displayValue.textContent = operate(num1, num2, rator).toPrecision(6);
            array.splice(0, array.length);
            array.push(displayValue.textContent);
        }    array.push("-");
        operator = true;
    }else array.pop();
});

const multi = document.querySelector("#multiply");
multi.addEventListener('click', (event) =>{
    let display = displayValue.textContent;
    array.push(display);
    if(array[array.length - 1] !== "*"){
        if(array.length === 3){
            num1 = Number(array[0]);
            num2 = Number(array[2]);
            rator = array[1];
            displayValue.textContent = operate(num1, num2, rator).toPrecision(6);
            array.splice(0, array.length);
            array.push(displayValue.textContent);
        }    array.push("*");
        operator = true;
    }else array.pop();
});

const divid = document.querySelector('#divide');
divid.addEventListener('click', (event) =>{
    let display = displayValue.textContent;
    array.push(display);
    if(array[array.length - 1] !== "/"){
        if(array.length === 3){
            num1 = Number(array[0]);
            num2 = Number(array[2]);
            rator = array[1];
            if(num2 === 0 ) displayValue.textContent = "Moron";
            else displayValue.textContent = operate(num1, num2, rator).toPrecision(6);
            array.splice(0, array.length);
            array.push(displayValue.textContent);
        }    array.push("/");
        operator = true;
    }else array.pop();
});

const modul = document.querySelector('#modulo');
modul.addEventListener('click', (event) => {
    let display = displayValue.textContent;
    array.push(display);
    if(array[array.length - 1] !== "%"){
        if(array.length === 3){
            num1 = Number(array[0]);
            num2 = Number(array[2]);
            rator = array[1];
            if(num2 === 0 ) displayValue.textContent = "Moron";
            else displayValue.textContent = operate(num1, num2, rator).toPrecision(6);
            array.splice(0, array.length);
            array.push(displayValue.textContent);
        }    array.push("%");
        operator = true;
    }else array.pop();
});

 const backspace = document.querySelector('#backspace');
 backspace.addEventListener('click', (event) => {
    let display = displayValue.textContent;
    const arr = display.split('')
    arr.splice(display.length - 1, 1);
    if(arr.length === 0){
        displayValue.textContent = 0;
        operator = true;
    } 
    else displayValue.textContent = arr.join('');
 });


 const decimal = document.querySelector('#decimal');
 decimal.addEventListener('click', (event) => {
    if(!displayValue.textContent.includes(".")){
        if (operator){
            displayValue.textContent = "0.";
            operator = false;
        }else displayValue.textContent += ".";
    }
 });


const clear = document.querySelector("#clear");
clear.addEventListener('click', (event) => {
    displayValue.textContent = 0;
    operator = true;
    array.splice(0, array.length);
})


// const equals = document.querySelector("#equals");
// equals.addEventListener('click', (event) =>{
//     let display = displayValue.textContent;
//     const arr = display.split(' ');
//     num1 = Number(arr[0]);
//     num2 = Number(arr[2]);
//     rator = arr[1];
//     displayValue.textContent = num1 = operate(num1, num2, rator);
// });

// const plus = document.querySelector("#add");
// plus.addEventListener('click', (event) =>{
//     let display = displayValue.textContent;
//     const arr = display.split(' ');
//     if(arr.length === 1){
//         num1 = array[0];
//     }else if(arr.length === 3){
//         num1 = Number(arr[0]);
//         num2 = Number(arr[2]);
//         rator = arr[1];
//         displayValue.textContent = num1 = operate(num1, num2, rator);
//     }

//     displayValue.textContent +=  " + ";
// });