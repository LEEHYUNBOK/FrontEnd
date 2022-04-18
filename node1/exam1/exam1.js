function doSomething(a, b, c) {
  let e = [a, b, c]
  let result = e.reduce((p1, p2) => (p1 > p2 ? p1 : p2))
  return result
}

console.log(doSomething(3, 1, 2))
console.log(doSomething(1, 2, 3))
console.log(doSomething(1, 3, 2))
