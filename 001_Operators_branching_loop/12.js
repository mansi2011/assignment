const num = parseInt(prompt("Enter any number to check if it is prime number"));

if (num === 1){
    console.log("1 is neither prime nor composite number")
}
else if (num>1){
    for(i=2; i<num; i++){
        if(num%i!==0){
            console.log("its a prime number");
        }
        else{
            console.log("its not a prime number")
            break;
        }
    }
}