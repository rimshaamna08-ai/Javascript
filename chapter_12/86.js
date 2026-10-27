//example

let browser =['chrome' , 'firefox' , 'saafari' , 'opera' , 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser); //removes last one

let removed = browser.shift();
console.log(removed);

//for updated version
console.log(browser);

for(let i = 0; i < browser.length; i++){
    console.log(browser[i]);
    if (browser[i] === "opera"){
        console.log("opera does not support this feature for now");
    }
}