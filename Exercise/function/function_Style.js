//normal function statement
function sayHi(){
    console.log('hi');
}

sayHi();

//function expression
var sayBye = function(){
    console.log('bye');
};

sayBye();

//FUnction pass to another

function callFunction(fun2){
    fun2();
}

var sayHello = function(){
    console.log('Hello');
};

callFunction(sayHello);