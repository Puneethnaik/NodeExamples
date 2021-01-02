function MyClass() {
    var privateVariable = "foo";
    this.publicVariable = "bar";
    this.privilegeMethod = function() {
        alert(privateVariable);
    }
}

MyClass.prototype.publicMethod = function() {
    alert(this.publicVariable);
}
MyClass.publicMethodOne = function() {
    console.log("Hello world");
}
MyClass.staticProperty = "baz";
var myInstance = new MyClass();
console.log(myInstance.publicVariable);

MyClass.publicMethodOne()