let nums = [11, 25, 48, 67, 85, 13, 44, 69, 44];

function secondBigNums(numbers) {
  let bigNum = 0;
  let secondNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > bigNum) {
      secondNum = bigNum;
      bigNum = number;
    } else if (number > secondNum && secondNum < bigNum) {
      secondNum = number;
    }
  }
  console.log(secondNum);
}

secondBigNums(nums);
