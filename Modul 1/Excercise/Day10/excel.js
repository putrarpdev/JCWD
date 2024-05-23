// A -> 1

function myFunc(input) {
    let alph = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let n = 0

    for (let i = 0; i < input.length; i++) {
        n = alph.findIndex(item => item == input.charAt(i)) + n * 26
    }

    return n
}

console.log(myFunc("AB"))