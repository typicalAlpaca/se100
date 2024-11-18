const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below
let total = 0;
for(let i=0; i<5; i++){
    total += MSFTStockClosingPrices[i];
}
console.log("The total sum of closing prices of MSFT is " + total.toFixed(2));
