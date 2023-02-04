// Write a code to find the smallest element of the array
// 335
// 149
// Math Operation
// Loop

// Suppose, you have an array with 5 elements. Find the smallest element of that array.

// [

// Note:

// Input format: an array will be accepted as input

// Output format: A single number

// ]

// Sample Input:

// [10,33,5,99,6]

// Sample output:

// 5

// ================================================

function findingSmallest(numbers) {
  let big = numbers[0];
  let small;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (big > number) {
      big = number;
      small = big;
    }
  }
  return small;
}

findingSmallest([10, 33, 5, 99, 6]);
