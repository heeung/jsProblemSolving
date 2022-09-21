function solution(s) {
    let answer = '';
    answer = s.toLowerCase().split(' ').map(w=> w.charAt(0).toUpperCase()+w.substring(1)).join(' ');
    //소문자로 바꾸고 공백으로 구분한다음, 구분지은 각 문자열의 0번째 문자를 대문자로 바꾸고 뒤에 나머지 문자열 붙여줌.
    //각각의 문자열을을 공백문자를 구분자로 사용해서 합쳐준다.
    return answer;
}