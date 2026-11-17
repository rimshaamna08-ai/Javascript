//array function

let scores = [
    [85, 90,78],
    [60,45,70],
    [95,88,92]
];

//matrix-> rows and columns are almost equal

//is we want sum of row

let rowsSum = scores.map(row => row.reduce((a,b) => a+b));
console.log(rowsSum);
