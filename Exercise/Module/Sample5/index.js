console.log("A simple node application");

var fruit = require('./fruit');
var banana = fruit('baana', 'Yellow fruit');
var cherry = fruit('cherry', 'small red fruit');

console.log(banana.getInfo());
console.log(cherry.getInfo());
