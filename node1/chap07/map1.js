let a1 = [1, 2, 3, 4, 5]
let a3 = []
let a2 = a1.map((value, index) => (a3[index] = value * 2))
console.log(a2.join())
console.log(a3)
