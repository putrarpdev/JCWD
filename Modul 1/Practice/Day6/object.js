const car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
}

let user = {
    name: "David",
    greet() {
        console.log('Hello')
    }
}

// console.log(user.name)
// console.log(user['name'])

let person = {
    name: 'Frangky',
    age: 26,
    address: {
        city: 'Jakarta',
        country: 'Indonesia'
    }
}

person.hobby = 'Coding' // add object
person.name = 'John' // update object
delete person.age // delete object


// console.log(person.address?.city) // optional

// console.log(Object.keys(person))

for (let key in person) {
    console.log(key) // key
    console.log(person[key]) // value
}

let selector = 'address'
console.log(person[selector])