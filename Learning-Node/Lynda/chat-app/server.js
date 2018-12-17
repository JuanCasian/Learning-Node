// imports express
var express = require("express")

// Creates an instance of the express object
var app = express()

// app.use defines a middleware function to call every time you make the request
// express.static is a function which serves static files to the requests
app.use(express.static(__dirname))

// makes app start to listen for connections on port 3000
// We added a callback which prints the port that is being listened to
// The app.listen returns a http.Server
var server = app.listen(3000, () => {
	console.log("Listening to requests on port", server.address().port)
})
