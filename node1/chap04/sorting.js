// sort = 배열에 들어있는 값이 숫자이지만, 문자열인 것처럼 정렬한다.

let a = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9]
a.sort()
console.log('[' + a.toString() + ']')

a.sort(compareNumber1)
console.log('[' + a.toString() + ']')

a.sort(compareNumber2)
console.log('[' + a.toString() + ']')

// 오름차순 정렬
function compareNumber1(i, j) {
  return i - j
}

// 내림차순 정렬
function compareNumber2(i, j) {
  return j - i
}
