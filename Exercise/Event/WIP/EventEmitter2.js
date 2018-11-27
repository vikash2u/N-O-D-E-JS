var events = require("events");

var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();


var id=1;

var database = {
	users: [
		{id: id++, name: "Dipanjan", occupation: "IT"},
		{id: id++, name: "Shyam", occupation: "IT"},
		{id: id++, name: "Rahim", occupation: "Business"}
	]
	
};

ee.on("SomeEvent", function(){
	console.log("event has occurred");
});

var handler1 = function handler1(){
	//data save logic
	
}
ee.on("save-user", handler1);

ee.emit("SomeEvent");
ee.emit("save-user", users);