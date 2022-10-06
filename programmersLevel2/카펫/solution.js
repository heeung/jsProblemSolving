function solution(brown, yellow) {
    let result = [];
    let size = brown + yellow;
    for(let i = 1; i <= Math.sqrt(size); i++)
        if(size % i === 0)
            result.push([size/i, i]);
    return result.filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0];
}