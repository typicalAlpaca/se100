function fetchData(): Promise<string> {
    // Write your code here
    return new Promise<string>((resolve, reject) => {
        let promiseResolve = setTimeout(() => {resolve("Data retrieved")}, 1000);
        console.log("fetchData() ran");
        return promiseResolve;
    });
}

function processData(data: string): Promise<string> {
    // Write your code here
    return new Promise<string>((resolve, reject) => {
        let amendedData = data + " and processed";
        console.log("processData() ran");
        return setTimeout(() => {resolve(amendedData)}, 2000);
    });
    
}

function displayData(data: string) {
    // Write your code here
    console.log(data);
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));
