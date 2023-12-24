let val1 = Number(prompt("Enter 1st number"));
let val2 = Number(prompt("Enter 2nd number"));
let arr = [];
while (isNaN(val1) || isNaN(val2)) {
	if (isNaN(val1)) {
		val1 = Number(prompt("Enter 1st number!"));
	}
	if (isNaN(val2)) {
		val2 = Number(prompt("Enter 2nd number!"));
	}
}
arr.push(val1, val2);
let sortedArr = arr.sort((a, b) => a - b);
for (let i = 1; i <= sortedArr[0]; i++) {
	if ((val1 % i == 0) & (val2 % i == 0)) {
		var highestDiv = i;
	}
}
console.log(`The highest divider of two value is ${highestDiv}`);
