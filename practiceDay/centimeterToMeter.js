// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(centimeter) {
  if (typeof centimeter !== "number") {
    return "Enter Number Only";
  } else {
    return centimeter * 0.01;
  }
}

let centimeter = centimeterToMeter(20);
console.log(centimeter);
