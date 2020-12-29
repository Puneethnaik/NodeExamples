let config = require('./config');
let events = require("events");

let emitter = new events.EventEmitter();
emitter.on(config.events.GREET, () => {
    console.log("Hello world");
})
emitter.on(config.events.GREET, () => {
    console.log("Another greet listener");
})
console.log("Testing node core event emitter");
emitter.emit(config.events.GREET);
