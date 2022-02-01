function arrayLength(arr){
    return arr.length;
}

function indexOfItem(arr,item){
    let result = arr.indexOf(item);
    return result;
}


function replace(arr,a,b){
    for(i=0; i<arr.length; i++){
        if(a==arr[i]){
            arr[i]=b;
        }
    }
    return arr;
    
}

console.log(arrayLength([1,5,3,7,8]));
console.log(indexOfItem([1,6,3,5,8,9], 9))
console.log(replace([1,5,3,5,6,8], 5, 10));