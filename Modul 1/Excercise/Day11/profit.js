function profit(arr) {
    let min = Math.min(...arr) // 1
    let idxMin = arr.indexOf(min) // 1
    let newArr = arr.splice(idxMin, arr.length - idxMin) // 
    let max = Math.max(...newArr)

    console.log({
        min, newArr, max
    })

    return max - min
}

console.log(profit([7, 1, 5, 3, 6, 4]))
console.log(profit([7, 6, 4, 3, 1]))

console.log([7, 1, 5, 3, 6, 4].splice(2, 6 - 2))