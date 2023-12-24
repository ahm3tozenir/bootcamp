let val = Number(prompt("Enter a number"));
let mul = Number(prompt("Enter a number as a multiplier"));

while (isNaN(val) || isNaN(mul)) {
	if (isNaN(val)) {
		val = Number(prompt("Enter a number"));
	}
	if (isNaN(mul)) {
		mul = Number(prompt("Enter a number as a divider"));
	}
}
let result = 0;
for (let i = 1; i <= mul; i++) {
	result += val;
}
document.write(`Result is ${result}`);
