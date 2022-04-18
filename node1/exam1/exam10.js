function contains(a, value) {
  return a.find((p) => p === value) ? true : false
}

let a = [1, 3, 5, 6]
console.log(contains(a, 3))
console.log(contains(a, 4))
console.log(contains(a, '3'))
