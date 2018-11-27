const Promise = require('bluebird'),
    fs = require('fs')
Promise.promisifyAll(fs)
// now you can use promise based methods on 'fs' with the Async suffix
fs.readFileAsync('file.txt', 'utf8').then(contents => {
    console.log(contents)
}).catch(err => {
    console.error('error reading', err)
})