function even(a) {
  let result = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      result.push(a[i])
    }
  }
  return result
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6]
console.log(even(a))
