let Emitter = require('./emitter');

var emtr = new Emitter();
emtr.on('greet', () => {
    setTimeout(() => {
        console.log("Somewhere someone said Hello.");
    }, 1000)
    
})

emtr.on('greet', () => {
    console.log("A greeting occured!");
})

console.log("Hello!");
emtr.emit('greet');