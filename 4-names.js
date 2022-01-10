// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

console.log(module)
// ==>
// Module {
//     id: '.',
//     path: '/Users/jisunlee/Desktop/node-tutorial',
//     exports: {},
//     parent: null,
//     filename: '/Users/jisunlee/Desktop/node-tutorial/4-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/jisunlee/Desktop/node-tutorial/node_modules',
//       '/Users/jisunlee/Desktop/node_modules',
//       '/Users/jisunlee/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }


module.exports = { john, peter }