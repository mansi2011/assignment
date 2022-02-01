//fibonacci Series:

const num =  parseInt(prompt("Enter the number to generate Fibonacci Series:"));
let var1 = 0;
let var2 = 1;
let var3 = [];
console.log(typeof(num));

for(i=2; i<=num; i++){
    console.log(var1);
    var3 = var1+var2;
    var1=var2;
    var2=var3;
}
console.log(var3);
console.log(typeof(var3))