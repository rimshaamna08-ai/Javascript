//left hand triangle : reversed right angle triangle

/*pattern we want
[[***],
  [**],
   [*]
];*/

let n=3;
for(let i = n; i>=1; i--){
    for(let j = 1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log(" ");
}