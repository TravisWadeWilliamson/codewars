/***********************************/
// 8kyu Square(n)Sum
/***********************************/
// Input: An array integers
// Output: a sum of the square of each integer in the array
// Edge cases:
// Restrictions: none

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

/***********************************/
// Original Attempt
/***********************************/
// const squareSum = (numbers) => {
//     sumOfTheArry = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var power = numbers[i] * numbers[i];
//         sumOfTheArry = sumOfTheArry+power
//     }
//      console.log(sumOfTheArry)
//     return numbers;
// }
// console.log(squareSum([1, 2, 2]))

/***********************************/
// Refactored with Math.pow()
/***********************************/

// const squareSum = (numbers) => {
//     sumOfTheArry = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         var power = Math.pow(numbers[i],2)
//         sumOfTheArry = sumOfTheArry+power
//     }
//     console.log(sumOfTheArry)
//     return numbers;
// }
// console.log(squareSum([2, 3, 4]))

/***********************************/
// Refactored with forEach
/***********************************/
const squareSum = (numbers) => {
    sumOfTheArry = 0;
    numbers.forEach(number => {
        var power = Math.pow(number, 2);
        sumOfTheArry += power
    });
    console.log(sumOfTheArry);
    return numbers;
}
// console.log(sumOfTheArry)
(squareSum([1, 2, 2]))
