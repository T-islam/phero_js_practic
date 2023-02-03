function fubar(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fubar");
    } else if (i % 3 === 0) {
      console.log("fuu");
    } else if (i % 5 === 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
}
fubar(50);
