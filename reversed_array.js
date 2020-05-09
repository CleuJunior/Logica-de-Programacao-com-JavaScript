//     Task

// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of
// the number in reverse order.

// Examples
// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]

function reverseArr(num) {
    num =  Array.from(String(num), Number);
    let returnArray = [];
    let indexSub = 0;
    for (let index = 0; index <  num.length ; index++) {
        indexSub = index +1;
        returnArray[index] = num[num.length-indexSub];   
    }

    return returnArray;
}

console.log(reverseArr(1485979));
console.log(reverseArr(623478));
console.log(reverseArr(12345));