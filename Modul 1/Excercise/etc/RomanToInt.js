let romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function RomanToInt(s){
    const romanArr = s.split("");
    let result = 0
    for (let i = romanArr.length - 1; i >= 0; i--) {
        const roman = romanArr[i];
        const right = romanArr[i+1];
        
        if (romanInt[roman] < romanInt[right]) {
            result-=romanInt[roman]
        } else {
            result+=romanInt[roman]
        }
    }

    return result;
}

console.log(RomanToInt("MCMXCIV"));