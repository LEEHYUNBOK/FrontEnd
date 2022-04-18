let a = [1, 'a', 2, 'c', 4, 'd', 5, 'e', 'f', 6, 7]

let numC = 0
let strC = 0
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == 'number') numC++
  if (typeof a[i] == 'string') strC++
}
console.log('number:' + numC + ' string:' + strC)
