function solution(n)
{
	let answer = 0;

	while (n)
	{
		answer = (n % 10) + answer;
	}
	return answer;
}
