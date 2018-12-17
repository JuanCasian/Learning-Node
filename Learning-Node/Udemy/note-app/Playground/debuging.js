var person = {
  name: 'Juan'
};

person.age = 20;

debugger; // creates debugger breakpoint

person.name = 'Pedro';

console.log(person);

//commands for debugging
// run program with => node inspect nameofprogram.js
//list(number of lines) prints n lines after the breakpoint
// n => next statement
// s => step in
// c => continue
// repl => te permite estar dentro de la aplicación en una consola

// To use create a new breakpoint you add debugger;
// you can also use nodemon with nodemon
