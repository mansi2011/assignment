function typeOfTriangle(a,b,c){

       if ((a+b+c)!=180) {
        console.log("Not A Valid Triangle");
    }
    else if ((a === b) && (b === c) && (c === a)) {
        console.log("Equilateral Triangle");
    }
    else if (a === b || b === c || a === c) {
        console.log("Isosceles Triangle");
    }
    else {
        console.log("Scalene Triangle");
    }

}

typeOfTriangle(30, 60, 90);