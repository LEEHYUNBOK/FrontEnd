let a = [
  'c:/temp/guide.hwp',
  'c:/pj/frontend/chap05/substring1.js',
  'homework.docx',
]

// 파일 확장자 출력하기
// .hwp
// .js
// .docx

console.log(a[0].match(/\.[a-zA-Z0-9]+/g))
console.log(a[1].match(/\.[a-zA-Z0-9]+/g))
console.log(a[2].match(/\.[a-zA-Z0-9]+/g))

// [설명]
// "\"는 뒤에 특수문자로 시작하는 값을 찾을 수 있게 해주고
// => \.은 .로 시작하는 문자를 찾기
// "[a-zA-Z0-9]"는 .뒤에 시작하는 문자들의 조건문이다.
// a~z,A~Z,0~9이 조건에 포함된 문자만 넣는다.
// "+"는 1개 이상을 찾아라 라는 의미이다.
// "g"는 모든 문자열에서 찾아라 라는 의미이다.

/* ========================================================== */

// 파일명 출력하기
// guide.hwp
// substring1.js
// homework.docx
console.log()
console.log(a[0].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g))
console.log(a[1].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g))
console.log(a[2].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g))

// 파일 이름부분만 출력하기
// guide
// substring1
// homework

console.log()
console.log(a[0].match(/[0-9a-zA-Z]+(?=\.)/g))
console.log(a[1].match(/[0-9a-zA-Z]+(?=\.)/g))
console.log(a[2].match(/[0-9a-zA-Z]+(?=\.)/g))
