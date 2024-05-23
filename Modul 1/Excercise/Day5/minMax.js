// Write a function to get the lowest, highest and average value in the array (with and without sort function).

function minMax(arr) {
  arr.sort((a, b) => a - b); // sorting by ascending

  let lowest = arr[0]
  let highest = arr[arr.length - 1]
  let average = arr.reduce((a, b) => a + b) / arr.length

  return { lowest, highest, average };
}

console.log(minMax([12, 5, 23, 18, 4, 45, 32]));
