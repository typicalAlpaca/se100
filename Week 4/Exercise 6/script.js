const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below

function findbetween(stockClosingPrices, start, end, stockName){
    let num = 0;
    for(value of stockClosingPrices){
        if(value >= start & value <= end){
            num++;
        }
    }
    console.log("Closing price of " + stockName + " between " + start + " to " + end + ": " + num + " Days");
}

findbetween(MSFTStockClosingPrices, 254, 257, "MSFT");
findbetween(AAPLStockClosingPrices, 254, 257, "AAPL");
