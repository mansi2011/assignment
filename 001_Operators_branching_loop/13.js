let details = {
    monday: "weekday",
    tuesday: "weekday",
    wednesday:"weekday",
    thursday:"weekday",
    friday: "weekday",
    saturday: "weekend",
    sunday: "weekend"
}

var day = prompt("Enter the day to check weeday or weekend");


var result = details[day];

if(result == 'weekday'){
    console.log(`${day} is weekday`);
}
else {
    console.log(`${day} is weekend`);
}