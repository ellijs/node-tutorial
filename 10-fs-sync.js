const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } 
// => value adds up, not overwriting
)
console.log('done with this task')
console.log('starting the next one')


// it might be time consuming, take really long time, no cannot serve other users. applications might be down.