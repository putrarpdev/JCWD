console.log("Hello World!"); // Ini adalah code untuk menampilkan log pada console

var global;
global = "Hello I'm Global Variable"; //Declare global, changable variable
console.log(global);
global = "Hello I'm the New Global Variable!" //Dapat Dirubah
console.log(global);

let replacable; //Declare scoped, changable variable
replacable = "Hello I'm Scoped Variable!";
console.log(replacable);
replacable = "Hello I'm the New Scoped Variable!" //Dapat Dirubah
console.log(replacable);

const constant = "Hello, I'm Constant Variable";
console.log(constant);
//constant = "I Cannot be changed"; //Akan melemparkan error "Assignment to constant variable"

let name = "Putra";
console.log(name);

let newName = name;
console.log(newName);
let person = {
    name : "Putra",
    age : 28
}
console.log(person);

let newPerson = person;
console.log(newPerson);

person.age = 27;
console.log(newPerson);
console.log(person);

newPerson.age = 29;
console.log(newPerson);
console.log(person);