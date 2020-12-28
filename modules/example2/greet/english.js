const greetings = require("./greetings.json");

let greet = () => {
    console.log(greetings.en);
}

module.exports = greet;