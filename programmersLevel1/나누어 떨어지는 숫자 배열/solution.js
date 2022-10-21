function solution(arr, divisor) {
    let ret = [];
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            ret[idx++] = arr[i];
        }
    }
    if (idx === 0)
        ret[idx] = -1;
    return ret.sort((a,b) => a - b);
}