//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in map) {
            return [i, map[target - num]];
        }
        map[num] = i;
    }  
};

//https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return String(x) == String(x).split("").reverse().join("");
};

//https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
let romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanInt[s[i]] < romanInt[s[i+1]]) {
            result-=romanInt[s[i]]
        } 
        else {
            result+=romanInt[s[i]]
        }
    }
    return result
};

//https://leetcode.com/problems/longest-common-prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let i = 0; i <= strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

//https://leetcode.com/problems/valid-parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (s.includes("{}") || s.includes("()") || s.includes("[]")) {
         s = s.replace("{}", "");
         s = s.replace("()", "");
         s = s.replace("[]", "");
     } 
     return s == ""; 
};

//https://leetcode.com/problems/plus-one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    num = BigInt(digits.join("")) + BigInt(1);
    return String(num).split("").map(Number)
};

//https://leetcode.com/problems/length-of-last-word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    arr = s.trim().split(" ")
    return arr[arr.length - 1].length;
};

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

//https://leetcode.com/problems/search-insert-position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let 
    l = 0,
    r = nums.length - 1
    
    while(r >= l){
        let mid = l + Math.floor((r - l) / 2);

        if(nums[mid] === target) return mid;
        
        if(nums[mid] > target){
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return l
};

//https://leetcode.com/problems/sqrtx
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    i = 0;
    while(true){
        if(x < i * i){
            return i - 1
        } else if (x == i * i){
            return i
        }
        i++
    }
};

//https://leetcode.com/problems/number-of-1-bits
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).length - n.toString(2).replaceAll("1","").length;
};

//https://leetcode.com/problems/excel-sheet-column-number
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;

    for(i=0 ; i < columnTitle.length; i++){
        res += (columnTitle.charCodeAt(i) - 64) * (26**(columnTitle.length - (i+1)));
    }

    return res;
};

//https://leetcode.com/problems/return-length-of-arguments-passed
var argumentsLength = function(...args) {
    return args.length
};

//https://leetcode.com/problems/score-of-a-string
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for(let i=1; i < s.length; i++){
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
    }
    return score;
};

//https://leetcode.com/problems/permutation-difference-between-two-strings
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let diff = 0;
    for(let i = 0; i < s.length; i++){
        let charToCalc = s[i];
        diff += Math.abs(i - t.indexOf(charToCalc))
    } 
    return diff;
};

//https://leetcode.com/problems/concatenation-of-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums);
};

//https://leetcode.com/problems/convert-the-temperature
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};

//https://leetcode.com/problems/divisible-and-non-divisible-sums-difference
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    for(let i = 1; i <= n; i++){
        if(i % m != 0){
            num1 += i
        } else{
            num2 += i
        }
        
    }

    return num1 - num2 
};

//https://leetcode.com/problems/shuffle-the-array
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x = n - 1
    let y = n * 2 - 1
    let result = []
    for(let i = y; i >= 0; i-=2){
        result.unshift(nums[y--])
        result.unshift(nums[x--])
    }

    return result;
};

//https://leetcode.com/problems/defanging-an-ip-address
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replaceAll(".","[.]")
};

//https://leetcode.com/problems/strictly-palindromic-number
/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n - 2; i++) {
        let baseN = String(n.toString(i)).split("")
        if (baseN.join("") !== baseN.reverse().join("")) {
            return false
        }
    }
    return true
};

//https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let 
    max = 0;
    temp = "";

    for (c of s){
        if(temp.includes(c)){
            temp = temp.substring(temp.indexOf(c)+1)
        }
        temp += c;
        max = Math.max(max, temp.length)
    }

    return max;
};

//https://leetcode.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revX = x.toString().split("").reverse();
    let res;
    let limit = 2**31
    if(revX.includes("-")){
        revX.unshift(revX.pop());
    }

    res = revX.join("");

    if(res > limit || res < -limit){
        res = 0;
    }

    return res
};



