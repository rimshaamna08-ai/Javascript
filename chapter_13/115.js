//example of passing spread to the function.

function add(a,b,c){
    return a+b+c;
}

let num = [1,2,3,4,5];
console.log(add(...num));
//here it will only take first three values and add them.

//we can also pass some function too

function hasError(...code){
    return code.some((c) => c >= 400);
}
let responseCodes = [200,201,404,403]; //here it will work with 4 values
let responseCodes1 = [200, 201, 404]; //here it will work with 3 values
hasError(...responseCodes);
console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes1));
