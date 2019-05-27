/***********************************/
// 8kyu Find Numbers Which Are Divisible By A Number
/***********************************/
// Input: An array of numbers 
// Output: An array of nums which are divisible by a passed in divisor
// Edge cases:
// Restrictions: 

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]


const divisible = (numbers, divisor) => {
    //creat a var to store nums from an array
    //we need to put the newNumArray outside of the forEach loop but inside the body for scoping issues
    const newNumArray = []; 

    //loop through the array and take the modulo of each number. If the num % divisor = 0 we can push that to the array
    numbers.forEach(number => {
        if (number % divisor === 0) {
            newNumArray.push(number);
        }
    });
    console.log(newNumArray)

    return newNumArray;
}

divisible([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)