const arr = ['A', 'B', 'C', 'D', 'E', 'F']
// a -> index 0
console.log(arr[4])

const score = [10, 20, 30, 40, 50]

const kotak = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arr.toString()) // ubah array ke string (pemisah comma)
// console.log(arr.join(""))

console.log(arr)
let deletedValue = arr.pop() // menghapus dari belakang
console.log(deletedValue)
console.log(arr)
arr.push("G") // menambahkan dari belakang
console.log(arr)
arr.shift() // menghapus dari depan
console.log(arr)
arr.unshift("Z") // menambahkan dari depan
console.log(arr)

console.log(arr.length) // panjang array

console.log(arr.indexOf("G"))

// score.sort((a, b) => a - b) // ascending
score.sort((a, b) => b - a) // descending
console.log(score)

arr.reverse()
console.log(arr)

const sum = score.reduce((a, b) => a + b)
console.log(sum)