function solution(n) {
    const arr = n.toString(10).split('').reverse().map(Number);
    return arr;
}