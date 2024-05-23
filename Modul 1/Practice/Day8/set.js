const fruits = ['banana', 'apple', 'jackfruit', 'apple']

const newFruits = new Set(fruits) // class

console.log(fruits)
console.log(newFruits)
console.log(Array.from(newFruits)) // balikin ke array dari set
console.log(typeof newFruits)

let student = [
    { name: 'andi' },
    { name: 'budi' },
    { name: 'cahyo' },
    { name: 'andi' },
]

let newStudent = new Set(student)

console.log(student);
console.log(newStudent);
console.log(student.map(item => item.name))