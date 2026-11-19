//promise all settle

Promise.allSettled([
    Promise.resolve("test A passed"),
    Promise.reject("test failed"),
    Promise.resolve("test c passed")
]).then(function(results){
    results.forEach(function(r,i){
        console.log("test " + (i+1) + ":" , r.status, "-", r.status === "fulfilled" ? r.value : r.reason); //string concatenation
    })
})