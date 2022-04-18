let count = 0
let t = setInterval(function () {
  count++
  console.log(new Date())
  if (count == 10) {
    clearInterval(t)
  }
}, 1000)
