new Promise(function(resolve, reject) {
    setTimeout(function() {
        let msg = true;

        if (!msg) {
            resolve("user: Async task completed");
        } else {
            reject("Error: undefined data");
        }

        console.log("Asynchronous operation executed");
    }, 1000);

}).then(function(result) {
    console.log(result);

}).catch(function(error) {
    console.log(error);
});