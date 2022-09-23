function solution(arr) {
    const sum = arr.reduce((a,b) => (a+b));
    return sum / arr.length;
}

/* 자바스크립트의 reduce함수는 배열의 각 요소를 순휘하며 callback함수의 실행 값을 누적하여
** 하나의 결과값을 반환한다.
*/