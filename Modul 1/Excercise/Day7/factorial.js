// Create a function to find a factorial number using recursion

let res = []
function factorial(n) {
    res.push(n)
    return n == 0 ? 1 : n * factorial(n - 1)
}

let hasil = factorial(5)

res.pop()
console.log(`${res.join(" x ")} = ${hasil}`);