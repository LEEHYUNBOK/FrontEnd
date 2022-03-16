// 문자열.indexOf(부분_문자열, 시작_위치)
// 문자열에서 부분_문자열을 찾아서, 찾은 위치(index)를 리턴한다.
// 시작_위치에서부터 뒤쪽으로(순방향으로) 찾기 시작한다.
// 시작_위치 파라미터가 생략된 경우 디폴트 값은 0 이다.
// 찾지 못할 경우 리턴값은 -1 이다.

let s = 'one two one two'
console.log(s.indexOf('two'))
console.log(s.indexOf('two', 5))
console.log(s.indexOf('TWO'))
