//string searching and checking

let url = "https://www.staging.testingarandomgiventext.com?true/new";

//includes()

url.includes("staging");
url.includes("random");

//starts with / ends with
url.startsWith("https");
url.startsWith("https://");
url.endsWith("new");

//indexof/ last indexof

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("t"));
console.log(url.indexOf("giventext"));
console.log(url.indexOf("nothere"));//-1 since we dont have no there in the given URL



