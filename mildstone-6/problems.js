// Practice Problem 1
/*


                    1) Write an arrow function that will take 3 parameters, will multiply
                    the parameters and will return the result.

*/
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(2, 3, 4));

/*

                    2) Write the following sentence in three lines and print the result:
                    I am a web developer. I love to code. I love to eat biryani.

*/
const sectenceThreeLines = `I am a web developer.
I love to code.
I love to eat biryani`;
// console.log(sectenceThreeLines);

/*
 *      3) Write an arrow function that will take 2 parameters: One parameter
            will come from you and the other parameter will be a default
            parameter. Add these two parameters and return the result.
 *
 */
const sum = (num1, num2 = 0) => num1 + num2;
// console.log(sum(10));

// Practice Problem 2

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const friendsName = (array) => {
  const evenFriend = [];
  for (const friend of array) {
    if (friend.length % 2 === 0) {
      evenFriend.push(friend);
    }
  }
  return evenFriend;
};

const friends = ["Elijah", "James", "William", "Benjamin"];

// console.log(friendsName(friends));

// Practice Problem 3
// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const avrgSum = (array) => {
  let sum = 0;
  for (const number of array) {
    const numberSqrt = Math.pow(number, number);
    sum += numberSqrt;
  }
  const average = sum / array.length;
  return average;
};
const numbers = [5, 6, 7, 8, 9];
const result = avrgSum(numbers);

// console.log(result);.

// Practice Problem 4

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

const num1 = [1, 2, 3, 4, 15];
const num2 = [6, 4, 7, 8, 9];
const findMax = (array1, array2) => {
  const arrays = [...array1, ...array2];

  const maxNumber = Math.max(...arrays);
  return maxNumber;
};

console.log(findMax(num1, num2));
