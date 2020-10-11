function operation(n1, n2, op) {
	if (op === "sum") {
		return n1 + n2;
	}
	if (op === "rest") {
		return n1 - n2;
	}
	if (op === "mult") {
		return n1 * n2;
	}
	if (op === "div") {
		return n1 / n2;
	}
}
operation(2,2,"sum");
