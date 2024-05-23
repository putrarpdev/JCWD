// Write a code to format number as currency (IDR)

let number = 1234567 // 1.234.567
let numString = number.toString() // "1234567"
let result = ""
let counter = 0

for (let i = numString.length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter > 0) {
        result = "." + result
    }

    result = numString.charAt(i) + result
    counter++
}

console.log(`Rp. ${result},00`)