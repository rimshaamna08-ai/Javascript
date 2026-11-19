//more examples of callback

function test(item, CallMeWhenDone){
    console.log("hi start the testcase");
    CallMeWhenDone();
}
test("verify the login page is working", async(page) => {
});