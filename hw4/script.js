let arr = [];
for (let i = 0; i < 3; i++) {
	let val = Number(prompt(`Enter ${i + 1}. value`));
	while (isNaN(val)) {
		val = Number(prompt(`Enter ${i + 1}. value`));
	}
	arr.push(val);
}
let sortedArr = arr.sort((a, b) => a - b);
let mid = Math.floor(arr.length / 2);
let median = sortedArr[mid];
console.log(median);
