let val1 = document.querySelector('#input1');
let val2 = document.querySelector('#input2');
let outDiv = document.querySelector('#output');
let plusRef = document.querySelector('#plus');
let minusRef = document.querySelector('#minus');
let multiplyRef = document.querySelector('#multiply');
let divideRef = document.querySelector('#divide');


plusRef.addEventListener('click', add)

function add(){
    let result = Number(val1.value) + Number(val2.value);
    console.log(result);
    outDiv.innerHTML = result;
}

minusRef.addEventListener('click', subtract)

function subtract(){
    let result = Number(val1.value) - Number(val2.value);
    console.log(result);
    outDiv.innerHTML = result;
}

multiplyRef.addEventListener('click', multiply)

function multiply(){
    let result = Number(val1.value) * Number(val2.value);
    console.log(result);
    outDiv.innerHTML = result;
}

divideRef.addEventListener('click', divide)

function divide(){
    let result = Number(val1.value) / Number(val2.value);
    console.log(result);
    outDiv.innerHTML = result;
}


