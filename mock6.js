const inpUsername = document.querySelector('#input-text');
const inpPassword = document.querySelector('#input-password');
const btnCheck = document.querySelector('#btn-check');
const outDiv = document.querySelector('#output');


btnCheck.addEventListener('click',()=>{
    if(inpPassword.value.includes(inpUsername.value)){
        outDiv.innerText = 'password should not contain username';
    }
    else{
        outDiv.innerText = 'you are set to go!'
    }
})