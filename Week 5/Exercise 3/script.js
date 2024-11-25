"use strict";
// Simulates fetching data from a server with a delay - Do not modify
async function fetchData(serverName) {
    console.log(`Fetching from ${serverName}...`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
    return `Data from ${serverName}`;
}
// Write your code here to fetch data from Server A, B, and C one by one
async function getAllData() {
    try {
        const dataFromA = await fetchData("Server A");
        console.log(dataFromA);
        const dataFromB = await fetchData("Server B");
        console.log(dataFromB);
        const dataFromC = await fetchData("Server C");
        console.log(dataFromC);
        console.log("All data fetched!");
    }
    catch (err) {
        console.log("Error encountered : " + err);
    }
}
// Call the main function - Do not modify
getAllData();
