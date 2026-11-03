//typeof

typeof missingName;
//even with one line thisprogram will run without giving any error
//because by default JS engine treats it as a variable

let missingName = 1;
// now after using let it will give error
//since now valu is in TDZ; it gives reference error
