function solution(arr) {
    let idx = arr.indexOf(Math.min(...arr))
	arr.splice(idx, 1);
    if (arr.length === 0)
        return [-1]
    else
	    return (arr);
}