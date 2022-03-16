// splice 메소드의 파라미터
// 배열.splice(삽입할_위치, 삭제할_항목_수, 삽입할_값_목록)

let a = [0, 1, 2]
a.splice(1, 0, 'a', 'b')
console.log(a)

// a.splice(1, 0, "a");
//   a 배열의 인덱스 1 위치에서, 0 개의 항목을 삭제하고, "a" 항목을 삽입한다.

let a1 = [0, 1, 2]
a1.splice(1, 0, 'a')
console.log(a1)

let a2 = [0, 1, 2]
a2.splice(1, 1)
console.log(a2)

// splice 는 하나만 하는 것이 바람직하다.
// 삽입만 할거면 삽입만, 삭제할 꺼면 삭제만
