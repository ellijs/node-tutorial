// npm - global command, comes woth node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// nodemon app.js
// zsh: command not found: nodemon

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// sudo npm install -g nodemon
// nodemon app.js
// NOW it's working

// package.json - manifest file (stores important info about project/package)
// manual approach ( create package.json in the root, create propertires etc)
// npm init ( step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
// => [ 1, 2, 3, 4 ]


// using gitignore, how can user use modules?
// run npm install => npm check dependencies and automatically set up modules

// npm i nodemon -D  
// create short cut in "Script"
// for deployment, nodemon refresh the server everytime it changes