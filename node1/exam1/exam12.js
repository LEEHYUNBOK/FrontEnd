function sort(a) {
  a.sort((p1, p2) => p2.localeCompare(p1))
}

let a = ['one', 'two', 'three', 'four', 'five']
sort(a)
console.log(a)
