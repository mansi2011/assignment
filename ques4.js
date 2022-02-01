let inputVal = document.querySelector('#inputText');
let outDiv = document.querySelector('#output');
let color1 = document.querySelector('#red');
let color2 = document.querySelector('#green');
let color3 = document.querySelector('#blue');
let display = document.querySelector('#show');

// display.addEventListener('click',showText);

display.addEventListener('click',() =>{
    outDiv.innerHTML = `<h1>${inputVal.value}</h1>`
})
color1.addEventListener('click',() => {
    outDiv.style.color = "red";
})
color2.addEventListener('click',() => {
    outDiv.style.color = "green";
})
color3.addEventListener('click',() => {
    outDiv.style.color = "blue";
})


