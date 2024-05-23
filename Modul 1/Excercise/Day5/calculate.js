// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length

function calculate(arr1, arr2) {
    let res = []

    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }

    return res
    // console.log(res)
}

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 5 + undefined = NaN
let num2 = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10]

console.log(calculate(num1, num2))

console.log(num1 + num2)

// calculate(num1, num2)