// Create a function to merge two array of student data and remove duplicate data

let arr1 = [
    { name: 'Student 1', email: 'student1@gmail.com' },
    { name: 'Student 2', email: 'student2@gmail.com' }
]

let arr2 = [
    { name: 'Student 1', email: 'student1@gmail.com' },
    { name: 'Student 3', email: 'student3@gmail.com' }
]

function merge(input1, input2) {
    let combine = [...input1, ...input2]
    let res = []

    combine.forEach((item) => {
        let stringed = JSON.stringify(item)
        if(res.includes(stringed) == false) {
            res.push(stringed)
        }
    })

    return res.map(item => JSON.parse(item))
}

console.log(merge(arr1, arr2))


const arr = [1, 2, 3]

console.log(arr.includes(4))