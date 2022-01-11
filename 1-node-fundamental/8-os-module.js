// BUILT IN OS MODULE

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)

//==>
// {
//     uid: 501,
//     gid: 20,
//     username: 'jisunlee',
//     homedir: '/Users/jisunlee',
//     shell: '/bin/zsh'
//   }
//   The System Uptime is 23917 seconds
  
//   node-tutorial on  main [!?] via ⬢ v14.17.0 
//   ➜ node 8-os-module
//   {
//     uid: 501,
//     gid: 20,
//     username: 'jisunlee',
//     homedir: '/Users/jisunlee',
//     shell: '/bin/zsh'
//   }
//   The System Uptime is 23977 seconds
//   {
//     name: 'Darwin',
//     release: '20.6.0',
//     totalMem: 17179869184,
//     freeMem: 3526774784
//   }