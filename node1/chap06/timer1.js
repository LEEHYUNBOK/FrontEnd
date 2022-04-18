let i = 0
let t = setInterval(function () {
  i++
  console.log(i + ' ', new Date())
  if (i == 10) {
    clearInterval(t)
  }
}, 1000)
