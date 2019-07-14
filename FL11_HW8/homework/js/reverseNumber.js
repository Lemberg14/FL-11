function reverseNumber (num1) {
	num1 = num1 + "";
	return num1.split("").reverse().join("");
}
reverseNumber(541);