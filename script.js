function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
	let arr = [num1, num2]
	for (let index = 1; index < num; index++) {
		arr[index + 1] = num1 + num2;
		num1 = num2;
		num2 = arr[index + 1];
	}
	return arr[index+1];
}

module.exports = fibonacci;
