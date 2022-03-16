// 문자열의 match 메소드는,
// 문자열에서 정규식 패턴과 일치하는 부분을 찾아서,
// 일치하는 부분에 대한 정보를 배열로 리턴한다.

// 출력 항목	                        설명
// 'pg=324'	                      |   /pg=[0-9]+/ 정규식과 일치하는 문자열
// index: 9,	                  |   일치하는 문자열의 위치
// input: 'list.jsp?pg=324&sz=15' |	  입력 문자열

let a = 'list.jsp?pg=324&sz=15'.match(/pg=[0-9]+/)

console.log(a)

let b = 'list.jsp?pg=324&sz=15'.match(/pg=([0-9]+)&sz=([0-9]+)/)

console.log(b)
console.log(b[0]) // 매칭된 문자열 전체
console.log(b[1]) // 첫째 괄호에 매칭된 부분
console.log(b[2]) // 둘째 괄호에 매칭된 부분
console.log(b.index) // 매칭된 문자열의 위치 index
console.log(b.input) // 입력 문자열
