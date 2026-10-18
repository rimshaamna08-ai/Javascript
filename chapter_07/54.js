//SWITCH GROUP

let browser = "Brave";

switch (browser) {
case "chrome":
case "Edge" :
case "Opera" :
case "Brave" :
    console.log("chromium project"); // all these browsers are grouped together
    break;
case "Firedox":
    console.log("mozilla project");
    break;
case "safari":
    console.log("Apple browser");
    break;
default:
    console.log("unknown browser");
}
