console.log("--Write a code to convert celsius to fahrenheit--");
let celcius = 100;
fahrenheit = (celcius * 9/5) + 32;

console.log(`${celcius} celcius is ${fahrenheit} fahrenheit\n`);
/*--------------------------------------------------------------------------------*/

console.log("--Write a code to check whether the number is odd or even--");
let oddOrEven = 28;
console.log(`${oddOrEven} is ${oddOrEven % 2 != 0 ? "Odd" : "Even"}\n`);
/*--------------------------------------------------------------------------------*/

console.log("--Write a code to check whether the number is prime number or not--");
let 
isPrime = true;
primeOrNot = 1;

if (primeOrNot < 1) {
    console.log("Invalid");
} else {
    for (let i = 2; i < primeOrNot; i++) {
        if(primeOrNot % i == 0){
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${primeOrNot} is Prime\n` : `${primeOrNot} is not Prime\n`)
/*--------------------------------------------------------------------------------*/

console.log("--Write a code to find the sum of the numbers 1 to N--");
let 
sumTo = 3;
sumToResult = 0;

for (let i = 0; i <= sumTo; i++) {
    sumToResult += i
}

console.log(`Sum of the number from 1 to ${sumTo} is ${sumToResult}\n`);
/*--------------------------------------------------------------------------------*/

console.log("--Write a code to find factorial of a number--");
let 
factorial = 4;
factorialResult = factorial;

for (let i = factorial - 1; i > 0; i--) {
    factorialResult *= i;
}

console.log(`${factorial} factorial is ${factorialResult}\n`);
/*--------------------------------------------------------------------------------*/

console.log("--Write a code to print the first N fibonacci numbers--");
let 
N = 3;
F = [0,1];

console.log(`Using Array`);

for (let n = 2; n <= N; n++) {
    F.push(F[n-2] + F[n-1]);
}

console.log(`First ${N} fibonacci is ${F[N]}\n`);

console.log(`Not using array`);

let
F0 = 0,
F1 = 1,
fN;

if(N > 1){
    for (let n = 2; n <= N; n++) {
        fN = F0 + F1;
        F0 = F1;
        F1 = fN;
    }
} else {
    fN = N;
}

console.log(`First ${N} fibonacci is ${fN}\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to display the multiplication table of a given integer--`)
let
n = 9;
limit = 10;

for (let i = 1; i <= limit; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

console.log(`\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to check whether a string is a palindrome or not--`)
let
word = "madam";

console.log(word.split('').reverse().join('') == word ? `"${word}" is palindrome\n` : `"${word}" is not palindrome\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to convert centimeter to kilometer--`)
let
cm = 150000

console.log(`${cm} cm is ${cm/10**5} km\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to format number as currency (IDR)--`)
let
amount = 123456789012345;
currResult = amount.toString();
len = currResult.length;
d = 1;

for (let i = len-1; i > 0; i--) {
    if(d % 3 == 0){
        currResult = `${currResult.substring(0,i)}.${currResult.substring(i)}`;
    }
    d++;
}

currResult = `Rp.${currResult},00`;

console.log(`${amount} to IDR is ${currResult}\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to remove the first occurrence of a given “search string” from a string--`)
let
stringToRemove = "Hello world";
remove = "ell";

console.log(`"${stringToRemove}" with removed ${remove} is "${stringToRemove.replace(remove,"")}"\n`)
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to capitalize the first letter of each word in a string--`)
let
stringToCap = "hello world";
words = stringToCap.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(`"${stringToCap}" with each word capitalized is "${words.join(" ")}"\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to reverse a string--`)
let
stringToReverse = "hello world";

console.log(`Reversed "${stringToReverse}" is "${stringToReverse.split('').reverse().join('')}"\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Write a code to swap the case of each character from string--`)
let
stringToSwapCase = "The QuiCk BrOwN Fox";
swappedCaseString = "";

for (let i = 0; i < stringToSwapCase.length; i++) {
    if (stringToSwapCase[i] == stringToSwapCase[i].toUpperCase()) {
        swappedCaseString += stringToSwapCase[i].toLowerCase();
    } 
    else  
    {
        swappedCaseString += stringToSwapCase[i].toUpperCase();
    }
}

console.log(`"${stringToSwapCase}" with swapped case is "${swappedCaseString}"\n`);
/*--------------------------------------------------------------------------------*/

console.log(`--Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".--`)

function fizzBuzz(n){
    result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 == 0 ){
            result.push("Fizz");
        }
        else if (i % 5 == 0 ){
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result.join(", ");
}

console.log(fizzBuzz(15));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Create a function to calculate Body Mass Index (BMI)--`)

function CalcBMI(weight, height){
    const BMI = (weight / (height**2)).toFixed(1);
    if(BMI < 18.5){
        return "Less Weight";
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        return "Ideal";
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        return "Overweight";
    }
    else if (BMI >= 30 && BMI <= 39.9) {
        return "Very Overweight";
    }
    else if (BMI > 39.9) {
        return "Obesity";
    }
}

console.log(CalcBMI(73, 1.7));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function to remove all odd numbers in an array and return a new array that contains even numbers only--`)

function removeOdd(numArr){
    return numArr.filter((item) => item % 2 == 0);
}

console.log(removeOdd([1,2,3,4,5,6,7,8,9,10]));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function to split a string and convert it into an array of words--`)

function stringToArray(string){
    result = string.trim().split(" ");
    return result;
}

console.log(stringToArray("Hello World"));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function to get the lowest, highest and average value in the array (with and without sort function)--`)

function getLowHiAvg(numArr){
    let
    lowest = numArr[0],
    highest = numArr[0],
    average

    numArr.forEach(element => {
        if (element < lowest) {
            lowest = element;
        }

        if (element > highest) {
            highest = element;
        }
    });

    average = numArr.reduce((a, b) => a + b) / numArr.length;

    return `Lowest : ${lowest}, Highest : ${highest}, Average : ${average}`;
}

console.log(getLowHiAvg([12, 5, 23, 18, 4, 45, 32]));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'--`)

function concateArray(stringArr){
    result = stringArr[0];

    for (let i = 1; i < stringArr.length; i++) {
        if (i != stringArr.length - 1) {
            result += `,${stringArr[i]}`;
        }
        else{
            result += `, and ${stringArr[i]}`;
        }
    }
    
    return result;
}

console.log(concateArray(["apple", "banana", "cherry", "date"]));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`-- Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.--`)

function calcArray(arr1, arr2){
    const resultArr = [];

    for (let i = 0; i < arr1.length; i++) {
        resultArr.push(arr1[i] + arr2[i]);
    }

    return resultArr;
}

console.log(calcArray([3, 5, 6], [2, 4, 9]));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array--`)

function addIfNew(numArr, newElement){
    alreadyF = false;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] == newElement) {
            alreadyF = true;
            break;
        }
    }

    if (!alreadyF) {
        numArr.push(newElement);
    }

    return numArr;
}

console.log(addIfNew([1, 2, 3, 4], 1));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements)--`)

function pushArr(max){
    numArr = [];
    maxArr = max;
    return function(addNumber){
        if (numArr.length < 5) {
            numArr.push(addNumber);
        }
        return numArr;
    }
}

const arr5 = pushArr(5);
console.log(arr5(1));
console.log(arr5(2));
console.log(arr5(3));
console.log(arr5(4));
console.log(arr5(5));
console.log(arr5(6));
console.log(arr5(7));
console.log("");
/*--------------------------------------------------------------------------------*/

console.log(`--Write a function that will combine 2 given array into one array--`)

function combineArr(arr1, arr2){
    return arr1.concat(arr2);
}

console.log(combineArr([1, 2, 3], [4, 5, 6]));
