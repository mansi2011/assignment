function minDate(dt1,dt2){
    var d1 = dt1.split('/');
    var d2 = dt2.split('/');
    if(d1[2]>d2[2]){
        console.log(`${dt2} is min`);    
    }
    else if(d1[1]>d2[1]){
        console.log(`${dt2} is min`);
    }
    else if(d1[0]>d2[0]){
        console.log(`${dt2} is min`);
    }
    else{
        console.log(`${dt1} is min`)
    }
}

minDate('02/05/2021', '24/01/2021');