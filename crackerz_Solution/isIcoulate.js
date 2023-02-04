// Is it Isosceles??
// 499
// 98
// if-else

// You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not.

// Isosceles means two sides are equal

// Sample Input-1:

// 9,8,9

// Sample output:

// Yes

// Sample Input-2:

// 8,8,8

// Sample output:

// No

function checkTriangle(side1, side2, side3) {
  if (side1 == side2 && side1 == side3 && side2 == side3) {
    return "No";
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    return "Yes";
  }
}

console.log(checkTriangle(9, 8, 9));

console.log(checkTriangle(8, 8, 8));
