function findMin(a,b,...arr){
    let result = Math.min(a,b,...arr);
    return result;
}

function findMax(a,b,...arr){
    let result = Math.max(a,b,...arr)
    return result;
}

console.log(findMin(3,5));
console.log(findMin(3,5,9,1));
console.log(findMax(3,5));
console.log(findMax(3,5,9,1));