function getNumberPromise() {
    const ex1Promise = new Promise((resolve, reject) => {setTimeout(() => {resolve("10");}, 2000)});
    return ex1Promise;  
};

// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});
