let str1='';
for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        str1 += '*'
    }
    str1 += '\n';
}

console.log(str1);

let str2='';
for(i=5; i>=1; i--){
    for(j=1; j<=i; j++){
        str2 += '*'
    }
    str2 += '\n';
}

console.log(str2);