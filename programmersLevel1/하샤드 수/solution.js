function solution(x) {
    const num = x.toString().split('').map(Number).reduce((a,b) => (a+b));
    if (x % num == 0) {
        return true;
    } else {
        return false;
    }
}