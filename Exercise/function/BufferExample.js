var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer ("Easy to learn", "utf-8");
var buf2 = new Buffer (" english", "utf-8");
var buf3 = Buffer.concat([buf, buf2]);
console.log(buf3.toString());

//buf.compare(buf2);

var buf4 = new Buffer(50);
buf3.copy(buf4);

var buffer5 = buf4.slice(0,9);
console.log(buffer5.toString());

var buf1 = new Buffer(26);
for (var counter=0; counter<26; counter++){
	buf1[counter] = counter+97;
}

console.log(buf1.toString('ascii'));
console.log(buf1.toString('ascii',0,5));

console.log(buf1.toString('utf8',0,5));
console.log(buf1.toString(undefined,0,5));

var json = buf1.toJSON(buf1);
console.log(json);

