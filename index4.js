// firstname, lastname, middlename
// email
// phone number
// address
// picture
// edge cases
/*
    class Contact{
        String firstName;
        ....
        Address address;
    }
    class Address{}
*/
var contact = {
    firstName: 'abc',
    lastName: 'xyz',
    phoneNumber: ['91-967-680-3056'],
    active: false,
    emails: [{
        email: 'abc@gmail.com',
        type: 'Primary'
    }, {
        email: 'abc@company.com',
        type: 'Official'
    }],
    pitcture: 'File://person.jpeg',
    address: {
        doorNo: '1-1233',
        street: 'Tolichowki',
        city: 'Hyderabad',
        pin: 500001
    }
}

var phoneBook = [contact, {}, {}];

for (var contact of phoneBook) {
    if (contact.firstName === 'xyz'
    || contact.lastName === 'xyz') {
        console.log("Found");
    }
}





