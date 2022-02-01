const textRef = document.querySelector("#text");
const plusRef = document.querySelector("#plus");
const minusRef = document.querySelector("#minus");

plusRef.addEventListener('click',increaseSize);

let letter = 32;
function increaseSize(){
    letter += 2;
    textRef.style.fontSize = letter.toString()+"px";


}

minusRef.addEventListener("click", decreaseSize);

function decreaseSize(){
    letter -= 2;  
    textRef.style.fontSize = letter.toString()+"px";

}