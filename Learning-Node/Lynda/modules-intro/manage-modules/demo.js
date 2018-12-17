// To install modules to local projects use npm install <name of module>
var _ = require("lodash")

// To install stuff for all use npm install -g <name of module>
// -g  == global
// We did this with nodemon, but it is a command line interface
// 	so we did not needed to include it

console.log(_.random(1, 10))
