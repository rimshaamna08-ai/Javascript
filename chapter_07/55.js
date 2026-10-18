//question

let fruit = "banana";
switch(fruit) {
    case "apple":
        console.log("apple selected");
        break;
    case "banana":
        console.log("banana selected");
        break;                            //only banana will be executed due to break statements after each case.
    case "cherry":
        console.log("cherry selected");
        break;
    case "date" :
        console.log("date selected");
        break;
    default:
        console.log("default reached");
    }