let arr = [];
let total = 0;
let avg = 0;
while (true) {
	let val = Number(prompt("Enter a value"));
	if (val == 0) {
		break;
	} else if (isNaN(val)) {
		val = Number(prompt("Enter a value"));
	} else {
		arr.push(val);
	}
}
for (let i = 0; i < arr.length; i++) {
	total += arr[i];
	avg = total / arr.length;
}
document.write(`Average of all input values is ${avg}`);
