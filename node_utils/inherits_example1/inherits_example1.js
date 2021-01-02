let utils = require("util");
let events = require("events");
function Greetr() {
    this.greeting = 'Hello world';
}

utils.inherits(Greetr, events.EventEmitter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

Greetr.prototype.on("greet", ()=> {
    console.log("Hit greet event");
})

var greeter1 = new Greetr();
greeter1.on("greet", () => {
    console.log("Hit event");
})
greeter1.greet();

console.log("greeter2 greet output")
var greeter2 = new Greetr();
greeter2.greet();
