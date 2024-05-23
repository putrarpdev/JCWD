let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // spread oprator

console.log(arr3);

let obj1 = { name: "David" };
let obj2 = { email: "david@gmail.com" };
let obj3 = { ...obj1, ...obj2 }

console.log(obj3)

// setter & getter (set, get)
const user = {
    firstName: "John",
    lastName: "Smith",

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const splittedValue = value.split(' ')
        this.firstName = splittedValue[0]
        this.lastName = splittedValue[1]
    }
}

user.fullName = 'Allice Cooper'
console.log(user.fullName)