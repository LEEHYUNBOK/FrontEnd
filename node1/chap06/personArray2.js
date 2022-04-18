function deepClone(obj) {
  let result = []
  for (let i = 0; i < obj.length; i++) {
    result[i] = {}
    for (let key in obj[i]) {
      result[i][key] = obj[i][key]
      //   console.log(result[i])
      //   result[i] = { ...result[i], cont }
      //   console.log('%s : %s', key, value)
    }
  }

  return result
}

let person1 = []

for (let i = 0; i < 3; i++) {
  person1.push({ name: '홍길동', age: i })
}
console.log('처음')
console.log(person1)

const person2 = deepClone(person1)

person1[1].name = 'test'
console.log(person1)
console.log(person2)
