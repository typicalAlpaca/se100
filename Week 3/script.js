const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

// Write your code below
if (stockOHLC['open'] > stockOHLC['close']) {
    console.log("Stock is bearish");
} else {
    console.log("Stock is bullish");
}
