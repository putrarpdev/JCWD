// Create a function to get the intersection of two objects

function intersection(obj1, obj2) {
    let res = {} // { a: 1 }

    for (const key in obj1) {
        if(obj1[key] === obj2[key]) {
            res[key] = obj1[key]
        }
    }

    return res
}


console.log(intersection({ a: 1, b: 2 }, { a: 1, c: 3 }))