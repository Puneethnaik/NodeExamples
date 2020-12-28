const greet1 = require("./greet1");
greet1();
const greet2 = require("./greet2");
greet2.greet()


const greet3 = require("./greet3");
greet3.greet()

//Not necessarily a good pattern
const Greet4 = require("./greet4");
const greet4 = new Greet4();
greet4.greet()

var greet5 = require("./greet5");
greet5.greet();