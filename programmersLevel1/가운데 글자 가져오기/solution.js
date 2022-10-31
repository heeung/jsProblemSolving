function solution(s) {
    let ret = s.split('');
    
    if (ret.length % 2 == 0)
        return (ret.splice(s.length / 2 - 1, 2).join(''));
    else
        return (ret.splice(s.length / 2, 1).join(''));
}