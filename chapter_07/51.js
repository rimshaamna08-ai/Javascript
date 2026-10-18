//executing 50.js code with break statement

//question

let day = 2;
switch(day){
    case 0:
        console.log("Sunday, rest day");
        break;
    case 1:
        console.log("Monday, sprint day");
        break;
    case 2:
        console.log("Tuesday, development day");
        break;
    case 3:
        console.log("Wednesday. code review");
        break;
     case 4:
        console.log("Thursday, testing");
        break;
    case 5:
        console.log("Friday, development and retro");
        break;
        case 6:
        console.log("Saturday, rest day");
        break;
    default:
        console.log("invalid day value");
        break;
   }

   //only till line day 2 i.e. tuesday will be executed.
