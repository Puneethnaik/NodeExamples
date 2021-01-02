let person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

let john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

console.log(john.greet());
console.log(john.__proto__.firstname)

let jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

person.firstname = 'John';
console.log(jane.__proto__)
console.log(jane.greet());