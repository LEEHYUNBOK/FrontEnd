let person = { name: '홍길동', age: 16 }
let info = { age: 20, department: '소프', year: 2 }

Object.assign(person, info)
console.log(person)

/* 
Object.assign(to, from)

from 객체의 모든 멤버 변수 값을, to 객체에 복사한다.

from 객체의 멤버 변수와 같은 이름의 멤버 변수가 to 객체 있다면, 
to 객체의 멤버 변수의 값이 from 객체의 멤버 변수 값으로 바뀐다.

from 객체의 멤버 변수와 같은 이름의 멤버 변수가 to 객체에 없다면,
그 멤버 변수가 to 객체에 새로 만들어지고 값이 대입된다.

assign 메소드는 to 객체를 리턴한다. 

*/
