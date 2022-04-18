function removeRight(a, count) {
  a.splice(a.length - count, count)
}

let a = [0, 1, 2, 3, 4]
removeRight(a, 2)
console.log(a)
