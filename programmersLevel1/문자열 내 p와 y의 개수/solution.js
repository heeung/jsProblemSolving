function solution(s) {
    let countP = 0;
    let countY = 0;
    if (s.indexOf('p') > -1) {
        countP += s.match(/p/g).filter(item => item !== '').length;
    } if (s.indexOf('P') > -1) {
        countP += s.match(/P/g).filter(item => item !== '').length; 
    } if (s.indexOf('y') > -1) {
        countY += s.match(/y/g).filter(item => item !== '').length; 
    } if (s.indexOf('Y') > -1) {
        countY += s.match(/Y/g).filter(item => item !== '').length; 
    }
    return (countP == countY ? true : false)
}