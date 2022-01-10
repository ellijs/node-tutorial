// Modules  - Encapsulated Code (only share minimum)
//Common JS, every file is module (by default)


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





