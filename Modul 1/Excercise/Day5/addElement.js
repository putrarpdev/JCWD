// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function addElement(newElement) {
    let arr = [1, 2, 3, 4]

    if (arr.includes(newElement) == false) {
        arr.push(newElement)
    }

    return arr
}

console.log(addElement(7))

