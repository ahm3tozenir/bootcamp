let val = Number(prompt("Enter a number"));
let div = Number(prompt("Enter a number as a divider"));

while (isNaN(val) || isNaN(div)) {
	if (isNaN(val)) {
		val = Number(prompt("Enter a number"));
	}
	if (isNaN(div)) {
		div = Number(prompt("Enter a number as a divider"));
	}
}

let count = 0;
while (val > 0) {
	count++;
	var preVal = val;
	val = val - div;
	if (val < 0) {
		count--;
		reminder = preVal;
	} else {
		reminder = val;
	}
}
console.log(`Reminder is ${reminder} and Quotinent is ${count}`);
