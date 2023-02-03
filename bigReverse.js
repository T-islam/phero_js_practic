let n = [44, 8, 75, 88, 66, 55, 44, 7, 22, 1];

for (let i = 0; i < n.length; i++) {
  for (let j = i + 1; j < n.length; j++) {
    if (n[i] < n[j]) {
      let temp = n[i];
      n[i] = n[j];
      n[j] = temp;
    }
  }
}

console.log(n);
