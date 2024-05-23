// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function concate(arr) {
    let lastWord = arr.pop() // date
    return arr.join(",") + `, and ${lastWord}`
}

// console.log(concate(['apple', 'banana', 'cherry', 'date']))


let fruits = ['apple', 'banana', 'cherry', 'date']

console.log(fruits.join(' - '))

let student1 = 'Budi'
let student2 = 'Andi'

console.log(student1 + " " + student2)
console.log(student1.concat(student2))
console.log(`${student1} ${student2}`)