var btnCheck = document.querySelector('#btn-check');
var divOut = document.querySelector('#output');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const get

btnCheck.addEventListener('click',()=>{
    fetch('https://mock-practice.prakhar10v.repl.co/items')
    .then(res => res.json())
    .then(data => console.log(data))

    
})