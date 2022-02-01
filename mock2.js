let result = document.querySelector("#output");


function showOutput(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {return res.json()})
    .then((data) =>  {
        let output= '';
        result.innerHTML = data.map((todos)=> {
            output += `<p>title: ${todos.title}</p>
            <p>Completed: ${todos.completed}</p>`
            return output;
        }).join(""); 
    })
}

showOutput();

