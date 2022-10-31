function solution(absolutes, signs) {
    let ret = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] == false) {
            absolutes[i] *= -1;
        }
        ret += absolutes[i];
    }
    return ret;
}