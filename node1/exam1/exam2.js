function countNumber(a) {
  let result = 0
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == 'number') result++
  }
  return result
}

console.log(countNumber([1, 2, 3]))
console.log(countNumber(['1', 2, 3]))
console.log(countNumber(['1', 2, 3, 4, true]))
