let word = " Hello Purwadhika"
console.log(word);

let sliceWord = word.slice(0,6);
console.log(sliceWord);

let substringWord = word.substring(0,6);
console.log(substringWord);

let substrWord = word.substr(0,6);
console.log(substrWord);

let replaceWord = word.replace("a", "i");
console.log(replaceWord);

let replaceAllWord = word.replaceAll("a", "i");
console.log(replaceAllWord);

let toUpperCaseWord = word.toUpperCase();
console.log(toUpperCaseWord)

let toLowerCaseWord = word.toLowerCase();
console.log(toLowerCaseWord);

let concateWord = word.concat(sliceWord);
console.log(concateWord);

let trimWord = word.trim();
console.log(trimWord);

let padStartWord = word.padStart(25,'.');
console.log(padStartWord);

let padEndWord = word.padEnd(25,'.');
console.log(padEndWord);

let chartAtWord = word.charAt(5);
console.log(chartAtWord);

let charCodeAtWord = word.charCodeAt(5);
console.log(charCodeAtWord);

let splitWord = word.split(" ");
console.log(splitWord);

let indexOfWord = word.indexOf("a");
console.log(indexOfWord);

let lastIndexOfWord = word.lastIndexOf("a");
console.log(lastIndexOfWord);

let searchWord = word.search("a");
console.log(searchWord);