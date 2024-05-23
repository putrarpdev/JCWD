// Create a function that can accept input as an array of objects and switch all values into property and property into value

function myFunc(input) {
    let res = {}
    for (const key in input[0]) {
        res[input[0][key]] = key
    }

    return [res]
}

let obj = [
    { 
        name: "David",
        age: 25
    }
]

console.log(myFunc(obj))