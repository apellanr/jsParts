var person = {
    firstName: 'John',
    lastName: 'Appleseed',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');
}


/* Example: Bind Method =====================
Using logName as an object and call method of object
Can pass in any object to reference
    + bind makes a copy of function and can specify
    what this variable will be
=======================================*/
var logPersonName = logName.bind(person);
logPersonName('en');


/* Example: Call Method ===================
Can invoke function and control what this refers to
    + ability to pass in parameters
====================================*/
logName.call(person, 'en', 'es');


/* Example: Apply Method ==================
Does exactly the same thing as the .call() method
but with one major difference.
    + array is required as the parameter
====================================*/
logName.apply(person, ['es', 'it']);


/* ===================================
// Function expression create on the fly with 
// the apply method invoking it
====================================*/
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
}).apply(person, ['es', 'bp']);


/* ===================================
Example: Function Borrowing
Borrow methods from other objects. Set 'this'
keyword to person2 object using apply or call
====================================*/
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}
console.log(person.getFullName.apply(person2));


/* ===================================
Example: Function Currying
Associates with .bind() method. Passing in a
paramater to method does a special thing
    + sets default values for function params.
    if passed in
====================================*/

function multiply(a, b) {
    return a*b;
}
// 2 is set as the default value for first param.
var multiplyBy = multiply.bind(this, 2);
console.log(multiplyBy(4));