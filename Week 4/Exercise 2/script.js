const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
// Write your code below

let total = 0;
for(let i=0; i<2; i++){
    total += MSFTStockClosingPrices[i]['Monday'];
    total += MSFTStockClosingPrices[i]['Tuesday'];
    total += MSFTStockClosingPrices[i]['Wednesday'];
    total += MSFTStockClosingPrices[i]['Thursday'];
    total += MSFTStockClosingPrices[i]['Friday'];
}
console.log("The total sum of closing prices of MSFT is " + total.toFixed(2));
