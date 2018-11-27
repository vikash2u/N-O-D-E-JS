var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt', 'utf8');


/*myReadStream.on('data', function(chunk){
    console.log('New chunk received \n');
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    // console.log(chunk);
    myWriteStream.write(chunk);
})*/

myReadStream.pipe(myWriteStream);