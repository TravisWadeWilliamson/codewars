/***********************************/
// 8kyu Grasshopper Summation
/***********************************/
// Input: a number
// Output: sum of all the integers from 1 to that number
// Edge cases: none
// Restrictions: None

// APPLICATION CODE

const summation = (num) => {
	// pass in a number
	let total = 0;
	// create a parameter to capture the argument passed in
	for (let i = 0; i <= num; i++) {
		// loop over the number to get the ints from 1 to that number
		// console.log(i);
        total = total + i
        // console.log(total)
	}
    // add the numbers to get a total
    return total
	//return the output of the summed ints
};
console.log(summation(10))

// TESTS

if (summation(2) == 3) {
	console.log('Creates the correct result for input 2');
} else {
	console.log('Does not create the correct result for input 2');
}

if (summation(8) == 36) {
	console.log('Creates the correct result for input 8');
} else {
	console.log('Does not create the correct result for input 8');
}
