const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52];
let avg = 0;

for(let i=0; i<TSLAClosingPrices.length; i++){
    avg += TSLAClosingPrices[i]/TSLAClosingPrices.length;
}

console.log(avg);
