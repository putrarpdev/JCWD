/*
n = 4 -> 1 1 1 1 - 2 1 1 - 1 2 1 - 1 1 2 - 2 2 = 5
n = 5 -> 1 1 1 1 1 - 2 1 1 1 - 1 2 1 1 - 1 1 2 1 - 1 1 1 2 - 2 2 1 - 2 1 2 - 1 2 2 = 8
*/

function myFunc(n) {
    let fib = [0, 1] // [0, 1, 1, 2]

    for (let i = 0; i < n; i++) { // 0
        fib.push(fib[i] + fib[i + 1])
    }

    return fib[n + 1] // 6
}

console.log(myFunc(6))