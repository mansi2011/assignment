let inpNum = document.querySelector('#input1');
let btnCheck = document.querySelector('#check');
let outDiv = document.querySelector('#outDis');

btnCheck.addEventListener('click', check)


function check(){
    console.log(inpNum.value);
    if(Number(inpNum.value) % 2 === 0){
        outDiv.innerHTML = `<h1>The entered no is Even Number</h1>`
        console.log('even');
    }
    else{
        outDiv.innerHTML = `<h1>The entered no is Odd Number</h1>`
        console.log('odd')
    }
}