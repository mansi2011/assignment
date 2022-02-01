let inpVal = document.querySelector("#input-text");
let btnClick = document.querySelector("#btn-click");


btnClick.disabled = true;

inpVal.addEventListener("keyup",()=>{
    btnClick.disabled = false
})