function sum(a) {
  return a.reduce((p1, p2) => Number(p1) + Number(p2))
}

console.log(sum(['1', '2', '3', '4']))
console.log(sum(['3', '4', '5']))
console.log(sum(['20', '21']))
