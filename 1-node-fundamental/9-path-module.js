const path = require('path')

console.log(path.sep)

// join path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// basename
const base = path.basename(filePath)
console.log(base)

//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)


