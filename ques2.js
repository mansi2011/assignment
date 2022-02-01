let inpRef = document.querySelector('#inputText');
let plusFont = document.querySelector('#increase');
let minusFont = document.querySelector('#decrease');
let showRef = document.querySelector('#show');
let outDiv = document.querySelector('#output');

let fsize = output.style.fontSize;
console.log(parseInt(fsize));


showRef.addEventListener('click', showText);
plusFont.addEventListener('click',increaseFont);
minusFont.addEventListener('click',decreaseFont);

function showText(){
    outDiv.innerHTML = inpRef.value;
}

function increaseFont(){
    let res = 2 +  parseInt(fsize);
    console.log(res);
    let newFont = res.toString();
    outDiv.style.fontSize =  newFont+"px";
}

function decreaseFont(){
    let res = parseInt(fsize) - 2;
    console.log(res);
    let newFont = res.toString();
    outDiv.style.fontSize =  newFont+"px";
}

