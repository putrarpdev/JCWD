function majority(arr) {
    let mySet = new Set(arr)
    let result = null

    mySet.forEach((item) => {
        if (arr.filter(val => val == item).length > arr.length / 2) {
            result = item
        }
    })

    return result
}

console.log(majority([2, 2, 1, 1, 1, 2, 2, 1]))