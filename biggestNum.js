let nums = [11, 25, 48, 67, 85, 13, 44, 69, 44];

function bigestNum(numbers) {
  let big = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (big < number) {
      big = number;
    }
  }
  console.log(big);
}

bigestNum(nums);
