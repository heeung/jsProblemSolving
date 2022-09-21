function solution(s) {
    let answer = [];
    let zeroCount = 0;
    let count = 0;
    while (s.length !== 1) {
        const preLen = s.length;
        s = s.split(0).join('');
        const len = s.length;
        zeroCount = zeroCount + preLen - len;
        s = len.toString(2);
        count++;
    }
    answer[0] = count;
    answer[1] = zeroCount;
    return answer;
}