function mergeTwoLists(list1, list2) {
    let mergeArr = [...list1, ...list2]
    mergeArr.sort((a, b) => a - b)

    return mergeArr
}

let arr1 = [1, 2, 3]
let arr2 = [1, 3, 4] // [1, 1, 2, 3, 3, 4]

console.log(mergeTwoLists(arr1, arr2))