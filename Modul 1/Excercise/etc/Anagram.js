function isAnagram(s, t){
    s = s.toUpperCase().split("").sort().join("");
    t = t.toUpperCase().split("").sort().join("");
    return s === t;
}

console.log(isAnagram("Anagram", "Nagaram"));

console.log(`"test'`);