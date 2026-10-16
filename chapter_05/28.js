//practice question

let environment = "Staging";
let baseURL = environment === "Prod" ? "https://www.example1.com" : "https://www.example2.com";
console.log(baseURL);
