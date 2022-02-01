var inpText = document.querySelector('#input-text');
var outDiv = document.querySelector('#output-text');
var btnlog = document.querySelector('#log');
var btnwarn = document.querySelector('#warn');
var btnerror = document.querySelector('#error');

btnlog.addEventListener('click',()=>{
    outDiv.style.color = "black";
    outDiv.innerHTML = inpText.value;
})

btnwarn.addEventListener('click',()=>{
    outDiv.style.color = "yellow";
    outDiv.innerHTML = inpText.value;
})

btnerror.addEventListener('click',()=>{
    outDiv.style.color = "red";
    outDiv.innerHTML = inpText.value;
})