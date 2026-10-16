//nested if else

let age = 26;
if (age >= 18) {
    console.log("must be 18 to travel solo");
    if (age >= 26) {
        console.log("can travel and enjoy solo trips anywhere");
    } else {
        console.log("can travel to limited destinations");
    }
} else {
    console.log("no solo travelling");
}