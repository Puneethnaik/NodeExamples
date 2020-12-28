function Person(firstname, lastname) {
    this.lastname = lastname
    this.firstname = firstname
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

var john = new Person('John', 'Doe');
console.log(john.firstname)
console.log(john)
john.greet()
console.log(john.__proto__)
var jane = new Person('Jane', 'Doe');
jane.greet();
console.log("Are john's proto the same as janes proto?", john.__proto__ === jane.__proto__) 