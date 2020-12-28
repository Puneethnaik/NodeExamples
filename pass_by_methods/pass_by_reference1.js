function change(b) {
    b.hair = "long"
}

var a = {
    "hair": "short"
}

console.log("Before invoking change value of a ");
console.log(a);

change(a);

console.log("After invoking change value of a ")
console.log(a);