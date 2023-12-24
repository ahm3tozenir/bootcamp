let n = Number(prompt("Enter a number"));
while (true) {
	if (isNaN(n)) {
		alert("Please, enter just number");
		n = Number(prompt("Enter a number"));
	} else {
		break;
	}
}
let fibArr = [1, 1];
for (let i = 2; i < n; i++) {
	let pVal = fibArr[i - 2];
	let lVal = fibArr[i - 1];
	let pushVal = pVal + lVal;
	if (pushVal < n) {
		fibArr.push(pushVal);
	}
}
console.log(fibArr);
