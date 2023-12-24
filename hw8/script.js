let oddArr = [];
let evenArr = [];

for (let i = 0; i < 20; i++) {
	let val = Number(prompt("Enter a number"));
	if (isNaN(val)) {
		i--;
	} else if (val % 2 == 0) {
		evenArr.push(val);
	} else {
		oddArr.push(val);
	}
}
let totalOdd = oddArr.reduce((acc, cur) => acc + cur, 0);
let totalEven = evenArr.reduce((acc, cur) => acc + cur, 0);
document.write(
	`total of even input numbers = ${totalEven} and total of odd input numbers = ${totalOdd}`
);
