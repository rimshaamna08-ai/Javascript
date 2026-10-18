//question

let status = 0;
console.log(typeof status)

switch(status) {
    case false:
        console.log("false matched");
        break;
        case true:
    case 0:
        console.log("0 matched");
        break;
}

//switch uses strict comparison hence the answer will be zero as per case 0.