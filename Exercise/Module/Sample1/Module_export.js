//module.exports.counter = function(arr){
var counter = function(arr){
    return 'There are ' + arr.length + ' element in this array';
};

//module.exports.add = function(a,b){
var add = function(a,b){
    return `The sum of the 2 number is ${a+b}`;
};

// module.exports.pi = 1.123;
var pi = 1.123;

module.exports = {
    counter: counter,
    add:add,
    pi:pi
};

// module.exports.counter = counter;
// module.exports.add= add;
// module.exports.pi = pi;