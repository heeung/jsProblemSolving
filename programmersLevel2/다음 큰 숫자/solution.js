function solution(n) {
    let answer = 0;
    const count = n.toString(2).match(/1/g)?.length;
    for (let i = n + 1 ; i < 1000000 ; i++) {
        const nxtCount = i.toString(2).match(/1/g)?.length;
        if (nxtCount === count) {
            answer = i;
            break ;
        }
    }
    return answer;
}
