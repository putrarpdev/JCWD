function myFunc(str) {
  let res = 0;
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < str.length; i++) {
    let currNum = roman[str.charAt(i)]
    let nextNum = roman[str.charAt(i + 1)]

    if (currNum < nextNum) {
        res -= currNum
    } else {
        res += currNum
    }
  }

  return res
}

console.log(myFunc("IV"))
console.log(myFunc("MCMXCIV"))
