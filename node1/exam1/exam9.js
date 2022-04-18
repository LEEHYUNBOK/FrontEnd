function createArray(count) {
  let result = []
  for (let i = 0; i < count; i++) result[i] = i * 2 + 1
  return result
}

console.log(createArray(4))
console.log(createArray(5))
console.log(createArray(6))
