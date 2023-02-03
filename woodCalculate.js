function woodCalc(chair, table, bed) {
  let chairParWood = 3 * chair;
  let tableParWood = 5 * table;
  let bedParWood = 10 * bed;
  let totalWood = chairParWood + tableParWood + bedParWood;

  return totalWood;
}
let woods = woodCalc(1, 1, 1);
console.log(woods);
