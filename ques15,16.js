
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


function compareAge(object1,object2){
    if(object1.age>object2.age){
        return object1.name;
    }
    else{
        return object2.name;
    }

}




function comparePower(obj1,obj2){
    if(obj1.power>obj2.power){
        return obj1.name;
    }
    else{
        return obj2.name;
    }
}

console.log(compareAge(god1,god2));
console.log(comparePower(god1,god2));