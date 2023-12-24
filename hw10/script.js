let val = Number(prompt("Enter a number"));
while (isNaN(val)) {
	val = Number(prompt("Enter a number"));
}
// To declare a number is even or odd, we should check the number's reminder. If input value has a reminder. Certainly, it is a odd number.
if (val % 2 == 0) {
	console.log("Number is even");
} else {
	console.log("Number is odd");
}
