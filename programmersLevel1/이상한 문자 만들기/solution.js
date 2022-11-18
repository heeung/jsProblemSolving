function solution(s) {
    let ans = [];
    let index = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ")
            index = 1;
        if (index % 2 == 0) {
            if ('a' <= s[i] && s[i] <= 'z') {
                ans[i] = s[i].toUpperCase();
            } else {
                ans[i] = s[i];
            }
        } else {
            if ('A' <= s[i] && s[i] <= 'Z') {
                ans[i] = s[i].toLowerCase();
            } else {
                ans[i] = s[i];
            }
        }
        index++;
    }
    return ans.join('');
}