function solution(s) {
    if (!(s.length == 4 || s.length == 6))
        return false;
    for (let i = 0; i < s.length; i++) {
        if (is_digit(s[i]) == false)
            return false;
    }
    return true;
}

function is_digit(c) {
    if ('0' <= c && c <= '9')
        return true;
    return false;
}