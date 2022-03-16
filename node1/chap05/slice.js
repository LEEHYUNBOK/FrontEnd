let s = 'abcdefgh'

console.log(s.slice(2, 4))
console.log(s.slice(2))
console.log(s.slice(-3))

// substring 메소드는 slice 메소드와 유사하다.
// 차이점은, substring 메소드는 음수 파라미터를 사용할 수 없다는 점이다.
console.log('')
console.log(s.substring(2, 4))
console.log(s.substring(2))
console.log(s.substring(s.length - 3))

// substr 메소드는 slice 메소드와 유사하다.
// 차이점은, substr 메소드의 두 번째 파라미터는 부분 문자열의 길이라는 점이다.
console.log('')
console.log(s.substr(2, 2))
console.log(s.substr(2))
console.log(s.substr(-3))
