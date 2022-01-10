// Modules  - Encapsulated Code (only share minimum)
//Common JS, every file is module (by default)


const john = 'john'
const peter = 'peter'

const sayHi = name => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)