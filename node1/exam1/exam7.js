function clone(a) {
  let result = []
  for (let i = 0; i < a.length; i++) result[i] = a[i]
  return result
}

let a = [1, 2, 3]
let b = clone(a)
a[0] = 11
console.log(a)
console.log(b)
