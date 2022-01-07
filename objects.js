// objects 
var contact = {
    'firstName': 'John',
    firstName: 'akdfjk',
    lastName: 'xyz',
    dept: 'IT',

    isActive: function () {
        console.log("active");
    },
    address: {
        city: 'Hyderabad'
    },
    'first-name': 'abc'
};

// object initializers
// access prop
// write prop
// call methods
// dot notation
// bracket notation
// for-in
// reflection

// contact["first-name"]

// for (var key in contact) {
//     console.log(key, contact[key]);
// }

var key = "firstName";

contact[key]; // contact["firstName"] => contact.firstName

console.log(contact);