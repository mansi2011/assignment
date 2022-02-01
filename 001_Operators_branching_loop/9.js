let numInp = document.querySelector('#num');
let btnShow = document.querySelector('#show');
let outDiv = document.querySelector('#output');

btnShow.addEventListener('click', () => {
    let result = '';
    for (i=1; i<=12; i++){
        result += `${numInp.value}*${i}=${(numInp.value)*i}`;
        result += '<br>';
    }

    outDiv.innerHTML = result;
})