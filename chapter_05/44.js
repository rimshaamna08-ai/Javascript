//nullish operator example

let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata); //because the value was null

//when the value will not be null

let api_result = "Testing";
let response = api_result ?? "{}";
console.log(response); //testing will be printed