// function declaration

function sumNumber(num1, num2) {
    let result = num1 + num2
    return result
}

let x = sumNumber(20, 30)

// console.log(x)
// console.log(sumNumber(10, 5))


function reverseWord(word) {
    let result = ""

    for (let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i)
    }

    return result
}

// console.log(result)

// console.log(reverseWord("madam"))
// console.log(reverseWord("purwadhika"))
// console.log(reverseWord("indonesia"))
// console.log(reverseWord("hello world"))


// default parameter
function multiply(a, b = 1) {
    return a * b
}

// console.log(multiply(10, 3))

// rest parameter
function myFunc(a, b, ...more) {
    console.log(a)
    console.log(b)
    console.log(more)
}

// myFunc("One", "Two", "Three", "Four", "Five")

// nested function
function getMessage(firstName) {
    function sayHello() {
        return `Hallo ${firstName}. `
    }

    function welcomeMessage() {
        return `Welcome to Purwadhika!`
    }

    return sayHello() + welcomeMessage()
}

// console.log(getMessage("David"))

// closure function
function greeting(name) {
    const defaultMessage = "Hello "

    return function () {
        return defaultMessage + name
    }
}

// const greetingDavid = greeting("David")
// console.log(greetingDavid())

// console.log(greeting("John")())

// currying function
function multiplier(factor) {
    return function (number) {
        return factor * number
    }
}

const mul3 = multiplier(3)  // masukin factor
const mul5 = multiplier(5)

// console.log(mul3(5))
// console.log(mul3(10))
// console.log(mul5(2))

// console.log(multiplier(4)(2))

// recursive
function countDown(fromNumber) {
    console.log(fromNumber)

    let nextNumber = fromNumber - 1
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

// countDown(3)


// arrow function
const square = (number) => number * number

// console.log(square(10))

let number = "123" // Number()

console.log(number)
console.log(parseInt(number))
