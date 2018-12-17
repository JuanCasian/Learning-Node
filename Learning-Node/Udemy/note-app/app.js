console.log("Starting app.js");

// to get  alist of all included modules fo to nodejs.org/api/
// We use constant because we don't manipulate the value of it
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command  = argv._[0];
console.log("Command: ", command);
console.log("Process: ", process.argv);
console.log("Yargs: ", argv)

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (!(note)) {
    console.log("The tittle is repeated bro");
  } else {
    console.log("Note created");
    notes.logNote(note);
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note retrieved");
    notes.logNote(note);
  } else {
    console.log("Note not found")
  }
} else if (command === "remove") {
  var noteRemoved = notes.remove(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  // this is using ternary operator = condition ? res if true : res if false
  console.log(message)
} else {
  console.log("Command not recognize")
}
