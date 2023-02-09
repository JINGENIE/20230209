let firstA, a, newA, sum, count;

firstA = parseInt(26);
count = 0;

a = firstA;

while (1) {
	count += 1;
	sum = parseInt(Math.floor(a / 10) + (a % 10));
	newA = parseInt((a % 10) * 10 + (sum % 10));

	if (firstA === newA) {
		break;
	}
	a = newA;
}
console.log(count);
