let divArr = [];
let val = Number(prompt("Enter a number"));
while (isNaN(val)) {
	val = Number(prompt("Please, enter a number!"));
}
if (val > 0) {
	for (let i = 1; i <= val; i++) {
		if (val % i == 0) {
			divArr.push(i, i * -1);
		}
	}
}
console.log(divArr);
