//question

let day = 2;
switch(day){
    case 0:
        console.log("Sunday, rest day");
    case 1:
        console.log("Monday, sprint day");
    case 2:
        console.log("Tuesday, development day");
    case 3:
        console.log("Wednesday. code review");
     case 4:
        console.log("Thursday, testing");
    case 5:
        console.log("Friday, development and retro");
    case 6:
        console.log("Saturday, rest day");
    default:
        console.log("invalid day value");
}

//since we dont have break statement here so all lines will be executed after tuesday as it was day 2.