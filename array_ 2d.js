//      Task


// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples
// countOnes([
//   [1, 0],
//   [0, 0]
// ]) ➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) ➞ 2

function countOnes(matrix) {
	let count1 = 0
    for (let indexOut = 0; indexOut < matrix.length; indexOut++) {
        for (let indexIn = 0; indexIn < matrix.length; indexIn++) {
          matrix[indexOut][indexIn] == 1 ?  count1++ : count1+=0;           
            
        }
    }
    return count1;
}

console.log(countOnes([[1, 0], [0, 0]]));
console.log(countOnes([[1, 1, 1], [0, 0, 1], [1, 1, 1]]));
console.log(countOnes([[1, 2, 3], [0, 2, 1], [5, 7, 33]]));