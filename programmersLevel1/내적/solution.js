function solution(a, b) {
    let ret = 0;
    
    for (let i = 0; i < a.length; i++) {
        ret += a[i] * b[i];
    }
    return ret
}