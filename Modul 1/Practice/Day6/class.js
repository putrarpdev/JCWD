// template object
class Student {
    name
    #age
    city

    constructor(nama, umur, kota) {
        this.name = nama
        this.#age = umur
        this.city = kota
    }

    static welcome() {
        return `Hello world`
    }

    greeting() {
        return `Hello ${this.name}`
    }

    getAge() {
        return this.#age
    }
}

const student1 = new Student("Andi", 25, "Jakarta")
const student2 = new Student("Budi", 26, "Bandung")
const student3 = new Student("Caca", 27, "Batam")

console.log(student1.getAge())
console.log(student2.greeting())

console.log(Student.welcome())
console.log(Date.now()) // static method