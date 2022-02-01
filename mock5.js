var outDiv = document.querySelector('#output');

function getResponseAPI(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + 'https://mystery-api.kushanksriraj.repl.co/get')
    // .then(res => {return res})
    .then(data => {
        if(data.status == 401){
            outDiv.innerHTML = 'you are not logged in';
        }
        else if(data.status == 404){
            outDiv.innerHTML = 'page not found';
        }
        else if(data.status==200){
            outDiv.innerHTML = "API is working";
        }
    
    })
}

getResponseAPI();