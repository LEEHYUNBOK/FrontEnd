let a =
  'When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.'

a = a.replace(/[aeiouAEIOU]/g, 'o')

let print = ''
for (let i = 0; i < a.length; i++) {
  let position = a.indexOf('o', i)

  if (position != -1) {
    print = print + position + ' '
    i = position + 1
  }
}
console.log(print)
