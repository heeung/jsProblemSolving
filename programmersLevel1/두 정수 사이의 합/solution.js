function solution(a, b) {
    let ret = 0;
    if (a <= b)
        for (let i = a ; i <= b ; i++)
            ret += i;
    else
        for (let i = a ; i >= b ; i--)
            ret += i;
    return ret;
}