var fs = require('fs');
var events = require("events");
var nodemailer = require('nodemailer');


var eventsEmitter = new events.EventEmitter();

var filePath = 'sample.xml';
var outFile = 'outfile.txt';
var interval = 60000;

setInterval(function() {
    eventsEmitter.emit('readFileContent',filePath);
}, interval);


var readFileContent = function readFileContent(filePath)
{
	console.log('readFileContent: filePath - '+filePath);
	fs.readFile(filePath, function(err, data){
		if(err){
		console.error(err);
		throw err;
		}
		console.log("read data set ::"+data.toString());	
		eventsEmitter.emit('sendEmail',data.toString());
		eventsEmitter.emit('createFileWithContent',data.toString());
	});
}

var createFileWithContent = function createFileWithContent(content)
{
	console.log('createFileWithContent: filePath - '+outFile);
	 fs.writeFile(outFile, content, function (err) {
        if (err) {
		console.error(err);
		throw err;
		}		
        console.log('File is created with the content');
    });	
}

var sendEmail = function sendEmail(content)
{
	console.log('sendEmail: ready for sending mail');
	var transporter = nodemailer.createTransport({
	service: 'gmail',
	  auth: {
		user: 'youremail@gmail.com',
		pass: 'yourpassword'
	  }
	});
	var mailOptions = {
		from: 'youremail@gmail.com',
		to: 'myfriend@yahoo.com',
		subject: 'Sending Email using Node.js',
		text: content
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent: ' + info.response);
	  }
	});	
}

eventsEmitter.on("readFileContent",readFileContent);
eventsEmitter.on("createFileWithContent",createFileWithContent);
eventsEmitter.on("sendEmail",sendEmail);