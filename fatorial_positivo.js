//          Taks
// Write a function that takes a positive integer
// and return its factorial.

//      Examples
// factorial(4) ➞ 24

// factorial(0) ➞ 1

// factorial(9) ➞ 362880

function factorial(z) {
    return (z == 0)? 1 : z * (factorial(z -1));
	
}

console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(9)); // 362880