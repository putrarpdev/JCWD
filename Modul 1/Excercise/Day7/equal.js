let obj1 = { a : 1 } // {"a":1}
let obj2 = { a : 1 }

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

console.log(obj1 === obj2)
console.log(arr1 === arr2)

console.log(typeof arr1)

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(arr1))

// JSON.parse(value)
console.log(JSON.parse("[4,5,6]"))

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(isEqual(obj1, obj2))
console.log(isEqual(arr1, arr2))