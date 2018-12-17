
// fs is a module which lets you control files
var fs = require("fs")

/* The read file function of fs, asks for a callback, because it is asynchronous
 * 	this means the program goes on while the output is being waited for
 *
 * 	Call backs can be defined functions or undefined like we did right now
 * 		like lambda functions in python
 *
 * fs.readFile("./data.json", function(err, data){
 * 	console.log(data)
 * })
*/

// You can write lambda functions like we did before or like this
// (parameters, parameters) => { fucntion itself}

fs.readFile("./data.json", "utf-8", (err, data) => {
	var data = JSON.parse(data )
	console.log(data.name)
})

// another way to read files is with require
// This will actually create an object, while readfile only gets the string
data = require("./data.json")
console.log(data.name)
// We can't do this with readfile unless we parse the data
// 	because readfile is not getting an object
