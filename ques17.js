var god1 =    {
    name: "Ram",
    age: "25",
    yuga: "Treta",
    power: "2500"
}
var god2 =    {
    name: "Krishna",
    age: "31",
    yuga: "Dwapar",
    power: "2325"
}


// for(i=0; i<godDetails.namelength; i++){
//    var count = godDetails[i].name
//    return count*34
// }

// god1.name[i] 

var count = 0;
function comparePower(object){
    for(i=0; i<object.name.length; i++){
        count ++;
    }
    var power = parseInt(object.power) + count * 35
    return power;
}


function compareObj(obj1,obj2){
    if(obj1.name.length && comparePower(obj1) > obj2.name.length && comparePower(obj2)){
        var power = comparePower(obj1);
        return [power,obj1.name];
    }
    else{
        var power = comparePower(obj2);
        return [power,obj2.name];
    }
}
    
compareObj(god1,god2);