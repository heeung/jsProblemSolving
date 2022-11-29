function solution(d, budget) {
    let cnt = 0;
    let i = 0;
    d.sort((a, b) => a - b);
    
    while (i < d.length) {
        if (cnt > budget)
            break ;
        cnt = cnt + d[i++];
    }
    if (cnt > budget)
        return (i - 1);
    return (i);
}