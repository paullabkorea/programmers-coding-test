//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1(🎩 refactor 220425) - codeisneverodd
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

//정답 2 - chaerin-dev
function solution(n) {
  // n의 제곱근값을 x에 저장
  let x = Math.sqrt(n);
  // x가 정수이면 x+1의 제곱 반환, x가 정수가 아니면 -1 반환
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}
