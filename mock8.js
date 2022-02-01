var text = document.querySelector("#inp-text");
var btnCheck = document.querySelector("#btn-check");
var outDiv = document.querySelector("#output")


object = {"Tanvi" : "The best CEO Ever",
"Tanay": "He is our Funny mentor",
"Swapnil": "He helps us CONQUER jobs",
"Akanksha": "She is our cheerful Interviewer"}

function getText(){
    for(const key in object){
        if(text.value == key){
            outDiv.innerHTML = object[key];
        }
        else{
        outDiv.innerHTML = "not available";
        }
    }


}

btnCheck.addEventListener('click', getText)