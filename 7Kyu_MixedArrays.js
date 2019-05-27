/***********************************/
// 7kyu mixed arrays
/***********************************/
// Input: An array of strings and numbers
// Output: sum of the nums in the array
// Edge cases:
// Restrictions: some of the elements are strings

// APPLICATION CODE

const sumMixNums = (nums) => {
	// Create variable to store total
	let total = 0;
	// Iterate over input and add numbers together
	nums.forEach((num) => {
		const parsedNum = parseInt(num);
		total = total + parsedNum;
	});
	return total;
};

// TESTS DO NOT MODIFY

if (sumMixNums([ 1, 2 ]) === 3) {
	console.log('It adds 2 numbers correctly');
} else {
	console.log('It does not add 2 numbers correctly');
}

if (sumMixNums([ 1, 2, 1 ]) === 4) {
	console.log('It adds 3 numbers correctly');
} else {
	console.log('It does not add 3 numbers correctly');
}

if (sumMixNums([ '1', '1' ]) === 2) {
	console.log('It sums strings correctly');
} else {
	console.log('It does not sum strings correctly');
}

if (sumMixNums([ 1, '1' ]) == 2) {
	console.log('It sums numbers and strings correctly');
} else {
	console.log('It sums numbers and strings incorrectly');
}
