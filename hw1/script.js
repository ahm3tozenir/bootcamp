let list = [];

var x = Number(prompt("Enter a Number as a inital Natural Number"));
var n = Number(prompt("Enter a Number as a end Number"));

while (true) {
	if (isNaN(x)) {
		x = Number(prompt("Please, Enter inital Number as a Number!"));
	} else if (isNaN(n)) {
		n = Number(prompt("Please, Enter end Number as a Number!"));
	} else {
		break;
	}
}
while (true) {
	if (x < 0) {
		alert("Natural Numbers can not be below 0");
		x = Number(prompt("Enter a Number as a inital Natural Number"));
	} else {
		break;
	}
}
if (x < 0) {
	alert("Natural Numbers can not be below 0");
	x = Number(prompt("Enter a Number as a inital Natural Number"));
}

if (x < n) {
	for (x; x < n; x++) {
		list.push(x);
	}
} else {
	if (n >= 0) {
		for (x; x > n; x--) {
			list.push(x);
		}
	} else {
		for (x; x >= 0; x--) {
			list.push(x);
		}
	}
}
console.log(list);
