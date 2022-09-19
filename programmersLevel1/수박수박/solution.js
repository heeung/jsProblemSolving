function solution(n) {
    let str = "";

    for (let i = 0 ; i < n ; i++) {
        if (i % 2 == 0) {
            str = str + "수";
        } else {
            str = str + "박";
        }
    }
    return str;
}