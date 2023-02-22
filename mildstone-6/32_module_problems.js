// Practice Problem map(), filter(), find() ++++++++++++++++++++++++++++++++++++++++

/*
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

*/

const numbers = [1, 3, 5, 7, 9];
// using for loop
const newArray = [];
for (const number of numbers) {
  newArray.push(number + 1);
}

//  using array.map()

const Neweven = numbers.map((number) => number + 1);

/**
 * 
 * 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 * 
 * 
 */
const divisibleArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleNumbers = divisibleArray.filter((number) => number % 10 === 0);

/**
 * 
 * 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
 * 
 * 
 */

const divisibleNumber = divisibleArray.find((number) => number % 10 === 0);

// compare the output of question 2 & question 3.

/*
ans: filter method find all elements and return new array who condition will be ttrue,   but find method return the first element who will be the first true ;

*/

// Practice Problem reduce() +++++++++++++++++++++++++++++++++++++++++++++++

/*
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

const anArray = [1, 9, 17, 22];

// using for loop

let resultLoop = 0;
for (let i = 0; i < anArray.length; i++) {
  const number = anArray[i];
  resultLoop += number;
}

// array.reduce() method

const reduceResult = anArray.reduce((sum, number) => number + sum);

// Practice Problem reduce()

const peoples = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Tina", age: 22 },
];
// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

// array.reduce() method
const totalAge = peoples.reduce((sum, person) => sum + person.age, 0);

let totalAges = 0;

// for loop
for (let i = 0; i < peoples.length; i++) {
  const age = peoples[i].age;
  totalAges += age;
}
