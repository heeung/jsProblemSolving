function solution(left, right) {
    let ret = 0;
    let tmp = 0;
    
    for (let i = left; i <= right; i++) {
        tmp = countDivisor(i);
        if (tmp % 2 == 0)
            ret += i;
        else
            ret -= i;
    }
    return ret
}

function countDivisor(num) {
    let cnt = 0;
    
    for (let i = 0; i <= num; i++) {
        if (num % i == 0)
            cnt += 1;
    }
    return cnt;
}