//question for ternary operator
let temp = 35;
let feel = (temp >= 40) ? "very hot" : (temp >= 30) ? "hot" : (temp >= 20) ? "warm" : (temp >= 10) ? "cool" : "cold";
console.log("temperature: ", temp, "| Feel: ", feel);