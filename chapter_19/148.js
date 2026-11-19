//callback

function placeOrder(item, callback){
    console.log("placing anorder order");
    console.log("order placed" , item);
    callback();
}
function CompleteOrderprint(){
    console.log("normal function");
}
placeOrder("burger",CompleteOrderprint);

//in JS we can have anonymous function: another way 

placeOrder("burger", function(){
    console.log("order is ready for pickup!")
});

//another way is by using arrow function

placeOrder("burger" , () => {
    console.log("arrow function")
});

//in PW for relating purpose only, everything after test('has title' , ) is nothing but a function

/*test('has title', async ({ page }) => {
    await.page.goto('https://playwright.dev/');
    await expect (page).toHaveTitle(/playwright/);
});
*/
