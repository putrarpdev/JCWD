function bmi(weight, hight) {
    let score = weight / hight ** 2
    let res = ""
    console.log(score)

    if (score < 18.5) {
        res = "less weight"
    } else if (score <= 24.9) {
        res = "ideal"
    } else if (score <= 29.9) {
        res = "overweight"
    } else if (score <= 39.9) {
        res = "very overweight"
    } else {
        res = "obesity"
    }

    return res
}

console.log(bmi(70, 1.65))