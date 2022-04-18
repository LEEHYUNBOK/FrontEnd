let a = [
  'c:/temp/guide.hwp',
  'c:/pj/frontend/chap05/substring1.js',
  'homework.docx',
]

console.log(a[0].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g)[0])
console.log(a[1].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g)[0])
console.log(a[2].match(/[0-9a-zA-Z]+\.[a-zA-Z0-9]+/g)[0])
