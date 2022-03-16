// queue 처럼 사용 가능

let a = []

for (let i = 0; i < 5; ++i) a.unshift(i)

console.log(a)

while (a.length > 0) {
  let value = a.shift()
  console.log('pop value=%d, array=%s', value, a)
}
