function solution(num) {
    let cnt = 0;
    while (num !== 1) {
        if (num % 2 == 0) {
            cnt++;
            num = num / 2;
        } else {
            cnt++;
            num = num * 3 + 1;
        }
    }
    if (cnt > 500)
        return -1;
    return cnt;
}