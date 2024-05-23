function triangle(height) {
    let count = 0
    
    for(let i = 1; i <= height; i++) {
        let res = ""
        for(let j = 1; j <= i; j++) {
            count++
            res += count < 10 ? `0${count} ` : `${count} `
        }
        console.log(res)
    }
}

triangle(4)