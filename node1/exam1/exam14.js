function createArray() {
  let t = [1, 2, 3]
  return [t, t, t]
}

let a = createArray()
console.log(a)

a[0][0] = 10
console.log(a)
