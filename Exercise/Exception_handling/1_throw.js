/*Exapmle-1
throw new Error("Some error occurred");
//or
var err = new Error("Some error occurrs");
throw err;
//or
throw "Some error occurr";

*/

/*Example-2

var a = 5;
var err = new Error("Some error message");
throw err; //this will print the error stack and node server will stop
a++; //this line will never be executed
console.log(a); //and this one also

//But in this example:

var a = 5;
var err = new Error("Some error message");
console.log(err); //this will print the error stack
a++;
console.log(a); //this line will be executed and will print 6

*/