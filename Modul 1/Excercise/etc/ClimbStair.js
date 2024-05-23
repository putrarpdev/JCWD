function ClimbStair(n) {
    let F = [0, 1];
    for (let i = 1; i <= n; i++) {
        F.push(F[i-1] + F[i]);
    }
    
    return F[F.length - 1];
};

console.log(ClimbStair(6));