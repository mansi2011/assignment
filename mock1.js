let initial = document.querySelector("#out");
let plusRef = document.querySelector("#plus");
let minusRef = document.querySelector("#minus");



let count = 0
plusRef.addEventListener('click',()=>{
    count += 1;
    initial.innerText = count;
})

minusRef.addEventListener('click',()=>{
    count -= 1;
    initial.innerText = count;
})