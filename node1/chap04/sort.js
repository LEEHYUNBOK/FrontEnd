let a = []
for (let i = 0; i < 100; ++i) {
  a[i] = Math.floor(Math.random() * 100 + 1)
}

console.log(a)

a.sort(compareNumber1)
console.log(a)
// 오름차순 정렬

function compareNumber1(i, j) {
  return i - j
}
