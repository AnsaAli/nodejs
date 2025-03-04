const fs = require('fs');

fs.readFile(__filename,()=> console.log('Reading the file'));

Promise.resolve().then(()=>console.log('From promise'));

process.nextTick(()=> console.log('From process.nexttick'));

setTimeout(()=>{console.log('From setTimeout')}, 0)

setTimeout(()=>{console.log('From setTimeout 2')}, 1000)

setImmediate(()=> console.log('From setImmediate'))

// From process.nexttick
// From promise
// From setTimeout
// From setImmediate
// Reading the file
// From setTimeout 2