let events = require("events");
let emitter = new events.EventEmitter();
emitter.on('greet', () => {
    console.log("Hello World");
})

emitter.on('greet', () => {
    console.log("Another greet listener");
})

console.log("Testing the greet emitter");
emitter.emit('greet')
