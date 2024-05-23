// Write a code to display the multiplication table of a given integer.

let word = "madam" // 5 - 1
let reverseWord = "" // kata yang dibalik

// console.log(word.charAt(4)) //m

for (let i = word.length - 1; i >= 0; i--) {
    // console.log(word.charAt(i))
    reverseWord += word.charAt(i)
}

if (word == reverseWord) {
    console.log(`${word} is palindrome`)
} else {
    console.log(`${word} is not palindrome`)
}