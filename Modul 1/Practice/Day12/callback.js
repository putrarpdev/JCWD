function displayer(something){
    console.log(something)
}

function calculator(a, b, callback) {
    callback(a + b)
}

calculator(10, 4, displayer)