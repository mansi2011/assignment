let inpVal = document.querySelector('#input');
let outDiv = document.querySelector('#result');
let btnCheck = document.querySelector('#btn-check')

// console.log(inpVal.value.length)
// btnCheck.disabled = false;
// btnCheck.addEventListener('click',() => {
//     console.log(inpVal.value.length)
//     if(inpVal.value.length >= 10){
//         outDiv.innerHTML = "success";
//         inpVal.style.borderColor = "green"
//     }
//     else{
//         outDiv.innerHTML = "weak password";
//         inpVal.style.borderColor = "red";

//     }
// })


btnCheck.disabled = true;
inpVal.addEventListener('keyup', ()=>{
    if(inpVal.value.length>=10){
        btnCheck.disabled = false;
        outDiv.innerHTML = "success";
        inpVal.style.borderColor = "green";
    }else{
        btnCheck.disabled = false;
        outDiv.innerHTML = "weak password";
        inpVal.style.borderColor = "red";
    }
})

