function solution(n, m) {
    let ans = [];
    
    for (let i = n; i >= 1; i--) {
        if (isCommonDivisor(n, m, i) == 0) {
            ans[0] = i;
            break ;
        }
    }
    for (let i = m; i <= 1000000; i++) {
        if (isCommonMultiple(n, m, i) == 0) {
            ans[1] = i;
            break ;
        }
    }
    return ans;
}

function isCommonDivisor(n, m, i) {
    if (n % i == 0 && m % i == 0)
        return 0;
    return 1;
}

function isCommonMultiple(n, m, i) {
    if (i % m == 0 && i % n == 0)
        return 0;
    return 1;
}