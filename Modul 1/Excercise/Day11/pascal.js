function pascal(n) {
    let res = [] // [[1], [1, 1], [1, 2, 1]]
    for (let i = 1; i <= n; i++) {
        let row = []
        for (let j = 0; j < i; j++) {
            if(j == 0 || j == i - 1) {
                row.push(1)
            } else {
                row.push(res[i - 2][j - 1] + res[i - 2][j])
            }
        }
        res.push(row)
    }
    return res
}

console.log(pascal(5))