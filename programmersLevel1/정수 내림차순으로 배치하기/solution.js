function solution(n) {
    let answer = 0;
    const arr = n.toString().split('').map(Number).sort((a,b) => (b-a));
    for (let i = 0 ; i < arr.length ; i++) {
        answer = answer * 10 + arr[i];
    }
    return answer;
}