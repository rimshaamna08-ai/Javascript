//closure concept

function startBrowser (){
    let name = "edge";

    function installBrowser (){
        console.log(name);
    }
    return installBrowser();
}
const runTc = startBrowser();
//runTc();
