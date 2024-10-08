// Control Flow Structures

// 1. Conditional Statements

// Conditionals  if, else-if , else statement
let temperature = 30;

if( temperature < 0){
    //statements
    console.log("It's freezing");
} 
else if (temperature >= 0  && temperature < 20){
    console.log("It's cool outside")
}
else if (temperature >= 20 && temperature < 30){
    console.log("It's warm");
}
else{
    console.log("It's hot outside");
}

// Conditionals: switch-case statements
let day = "Tuesday";

switch(day){
    case "Monday":
        console.log("It's the start of the weekdays");
        break;
    case "Friday":
        console.log("It's the end of the weekdays");
        break;
    default:
        console.log("It's just regular day")
}

// 2. Looping statements

// For Loop
for(let i = 1; i<=3; i++){
    console.log("For loop count:",i);
}

// While Loop
let count = 1;

while(count <=3 ){
    console.log("Do while count:",count);
    count++;
}

// Do while loop
let counter = 1;
do{
    console.log("Do while count:",count);
    count++;
}
while(count <=3)



