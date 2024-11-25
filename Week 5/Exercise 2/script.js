"use strict";
function fetchData() {
    // Write your code here
    return new Promise((resolve, reject) => {
        let promiseResolve = setTimeout(() => { resolve("Data retrieved"); }, 1000);
        console.log("fetchData() ran");
        return promiseResolve;
    });
}

function processData(data) {
    // Write your code here
    return new Promise((resolve, reject) => {
        let amendedData = data + " and processed";
        console.log("processData() ran");
        return setTimeout(() => { resolve(amendedData); }, 2000);
    });
}

function displayData(data) {
    // Write your code here
    console.log(data);
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));
