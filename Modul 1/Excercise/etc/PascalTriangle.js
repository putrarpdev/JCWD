function pascal(row){
    let result = [];

    for(let i = 0; i < row; i++){
        let temp = []
        for (let j = 0; j <= i; j++) {
            if(j == 0 || i == j){
                temp[j]=1
            } else {
                temp[j] = result[i-1][j-1] + result[i-1][j];
            }
        }
        result.push(temp);
    }

    return result;
}

console.log(pascal(5));