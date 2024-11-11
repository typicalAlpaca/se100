const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below
let open = (AAPLPrevBar['open'] + AAPLPrevBar['close'])/2;
console.log(open);

let close = (AAPLCurrentBar['open'] + AAPLCurrentBar['high'] + AAPLCurrentBar['low'] + AAPLCurrentBar['close'])/4;
console.log(close);

let high = Math.max(AAPLCurrentBar['open'], AAPLCurrentBar['high'], AAPLCurrentBar['close']);
console.log(high);

let low = Math.min(AAPLCurrentBar['low'], AAPLCurrentBar['open'], AAPLCurrentBar['close']);
console.log(low);
