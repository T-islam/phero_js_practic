let numbers = [
  11, 25, 354, 11, 25, 66, 44, 88, 77, 66, 44, 55, 11, 33, 44, 55, 77, 88, 99,
];

function removeDuplicate(numbers) {
  let unice = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (!unice.includes(number)) {
      unice.push(number);
    }
  }
  console.log(unice);
}
removeDuplicate(numbers);
