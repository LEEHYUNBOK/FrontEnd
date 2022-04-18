function createArray() {
  return [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]
}

let a = createArray()
console.log(a)

a[0][0] = 10
console.log(a)
