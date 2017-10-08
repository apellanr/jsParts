/* Reflection =================
An obj can look at itself, listing and 
changing its properties and methods.
========================== */

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// DO NOT DO THIS EVER! Demo of browser prototype
john.__proto__ = person;

// loop over every member in the object
for (var prop in john) {
    // checks if prop is on John object (Reflect)
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);     
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
};

var jim = {
    getFirstName: function() {
        return firstName;
    }
};

// Composes or combines all these objects
// including all properties and methods
_.extend(john, jane, jim);
console.log(john);