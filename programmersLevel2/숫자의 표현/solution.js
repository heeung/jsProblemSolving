function solution(n) {
    let ret = 1;
    let cnt = 2;
    let i = n - 1;

    while (i && i >= cnt) {
        let num = 0;
        for (let j = 0; j < cnt; j++) {
            num += i - j;
        }
        if (num > n) {
            i--;
        } else if (num < n) {
            cnt++;
        } else {
            i--;
            cnt++;
            ret++;
        }
    }
    return ret;
}