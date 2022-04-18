function add(a, ...values) {
  for (let i = 0; i < values.length; i++) a.push(values[i])
}

let a = [0, 1]
add(a, 2, 3, 4, 5)
console.log(a)
