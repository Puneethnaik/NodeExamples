const greetings = require("./greetings.json");

let greet = () => {
    console.log(greetings.hi);
}

module.exports = greet;