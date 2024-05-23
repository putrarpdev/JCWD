/*
anagram -> aaagmnr = ["a", "n" ...]
nagaram -> aaagmnr


rat -> art
car -> acr
*/

function myFunc(str1, str2) {
  const kata1 = str1.toLowerCase().split("").sort().join("");
  const kata2 = str2.toLowerCase().split("").sort().join("");

  return kata1 == kata2
}

console.log(myFunc("Anagram", "Nagaram"));
console.log(myFunc("rat", "car"));


console.log("abC".split("").sort((a, b) => a - b))


console.log("123".split(""))

let arr = [10, 20, 30]

console.log(arr.join(" - "))

let a = "a"
let b = 'b'
let c = `c`

let word = `hello world`
console.log(word);