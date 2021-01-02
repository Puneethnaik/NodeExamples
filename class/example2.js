function greet() {
    console.log("Hello World");
}

var ins = new greet();
console.log(ins)
ins = Object.create(greet)
console.log(ins)