/***********************************/
// 8kyu Remove First and Last Char
/***********************************/
// Input: A string and numbers
// Output: the string with the first and last character removed
// Edge cases:
// Restrictions:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (string) => {
	return string.slice(1, -1);
}

console.log(removeChar('Hellowwww Marshmallow'))