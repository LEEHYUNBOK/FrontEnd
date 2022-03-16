// 문자열.lastIndexOf(부분_문자열, 시작_위치)
// 문자열에서 부분_문자열을 찾아서, 찾은 위치(index)를 리턴한다.
// 시작_위치에서부터 앞쪽으로(뒷방향으로) 찾기 시작한다.
// 시작_위치 파라미터가 생략된 경우 디폴트 값은 문자열의 끝 위치이다.
// 찾지 못할 경우 리턴값은 -1 이다

let s = 'one two one two'
console.log(s.lastIndexOf('two'))
console.log(s.lastIndexOf('two', 11))
console.log(s.lastIndexOf('TWO'))
