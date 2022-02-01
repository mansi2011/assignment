let daysInMonth1 = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
let daysInMonth2 = ['Febraury','April','June','September','November']
let month = document.querySelector('#inpMonth');
let btnCheck = document.querySelector('#check');
let outDiv = document.querySelector('#disOut');

btnCheck.addEventListener('click', check)


function check(){

    for(i=0; i<daysInMonth1.length; i++){
        if(month.value.toUpperCase() == daysInMonth1[i].toUpperCase()){
            outDiv.innerHTML = `<h1>this month has 31 days </h1>`
        }    
    }

    for(i=0; i<daysInMonth2.length; i++){
        if(month.value.toUpperCase() == daysInMonth2[i].toUpperCase()){
            outDiv.innerHTML = `<h1>this month doesnt have 31 days </h1>`
        }    
    }


}