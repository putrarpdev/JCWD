


/*
1. formating phonenumber
    input = "1234567890"
    output = "(123) 456-7890"

    input = "4255551212"
    output = "(425) 555-1212"

2. pig latin
    input = "Pig latin is cool"
    output = "igPay atinlay siay oolcay"
*/

function formatPhoneNumber(input){
    let format = "(***) ***-****"

    for (let i = 0; i < input.length; i++) {
        format = format.replace("*", input.charAt(i))
    }

    return format
}

console.log(formatPhoneNumber("1234567890"))

function myFunc(input) {
    let res = []

    input.split(" ").forEach(item => {
        res.push(item.slice(1) + item.charAt(0) + "ay")
    })
    
    return res.join(" ")
}

console.log(myFunc("Pig latin is cool"))


console.log("abcd".replace("b", "d"))