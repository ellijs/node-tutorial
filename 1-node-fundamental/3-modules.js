// Modules  - Encapsulated Code (only share minimum)
//Common JS, every file is module (by default)

//Built-in Modules 
// - OS
// - PATH
// - FS
// - HTTP

// require - imports
// in order to access - giving path - always start with "./"
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')

// can access value through dot notation
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// can destructuring
const { john, peter } = require('./4-names.js')

sayHi('susan')
sayHi(john)
sayHi(peter)

console.log(names)


const data = require('./6-alternative-flavor')

console.log(data)
//{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

require('./7-mind-grenade')   //the sum is : 15
// invokes automatically because it's executed




