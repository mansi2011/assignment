let inputVal = document.querySelector('#inputText');
let outDiv = document.querySelector('#output');
let h1 = document.querySelector('#heading1');
let h2 = document.querySelector('#heading2');
let h3 = document.querySelector('#heading3');
let display = document.querySelector('#show');

display.addEventListener('click',showText);
h1.addEventListener('click',h1Text);
h2.addEventListener('click',h2Text);
h3.addEventListener('click',h3Text);

function showText(){
    outDiv.innerHTML = `<p>${inputVal.value}</p>`
}

function h1Text(){
    outDiv.innerHTML = `<h1>${inputVal.value}</h1>`
}

function h2Text(){
    outDiv.innerHTML = `<h2>${inputVal.value}</h2>`
}

function h3Text(){
    outDiv.innerHTML = `<h3>${inputVal.value}</h3>`
}




