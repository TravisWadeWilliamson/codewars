/***********************************/
// 7kyu 99 Problems #1 Last In List
/***********************************/
// Input: An array 
// Output: the last element in the array
// Edge cases:
// Restrictions: if [] return null

// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

// create a function that loops through an array and ppops the last element of an array off
const last = (arr) => {
	console.log(arr);
	let popped = arr.pop();
	if (arr.length === 0) {
		return null;
	}
	console.log(popped);
	return popped;
};
last([ 'horse', 'cat', 'dog', 'pig' ]);
