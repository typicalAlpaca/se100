function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

    let num = 0;
    for(value of MSFTStockClosingPrices){
        if(value >= 254 & value <= 257){
            num++;
        }
    }
    console.log("Number of closing prices between 254 and 257: " + num);
}

getBetween();
