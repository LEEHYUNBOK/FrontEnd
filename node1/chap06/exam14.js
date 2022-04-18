function createArray() {
  let t = [1, 2, 3]
  let k = []
  k[0] = t
  k[1] = t
  k[2] = t
  return k
}

let a = createArray()
console.log(a)

a[0][0] = 10
console.log(a)
