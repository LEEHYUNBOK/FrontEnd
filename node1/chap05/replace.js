// 문자열.replace(부분_문자열, 치환할_문자열)
// replace 메소드는, 문자열에서 부분_문자열을 찾아서 치환할_문자열로 치환한다.
// 일치하는 부분 문자열이 여러 개 있어도, 첫 번째 부분 문자열만 치환된다.
// 부분_문자열에 정규식을 사용할 수 있다.

let s = 'hello world'
console.log(s.replace('o', 'O'))
console.log(s)

s = 'hello world'
console.log(s.replace(/o/g, 'O'))
console.log(s)

// /정규식/g
//   g는, 일치하는 부분 문자열들을 전부 치환하라는 옵션이다.

// /정규식/i
//   i는, 문자열을 비교할 때, 대소문자를 무시하라는 옵션이다.
