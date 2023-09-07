// assigning  parameter values to the calling object
class person {
    constructor(person_name, person_age, person_gender) {
        this.name = person_name,
            this.age = person_age,
            this.gender = person_gender,

            this.greet = function () {
                return ('Hi' + ' ' + this.name);
            };
    }
};


// creating objects
const person1 = new person('John', 23, 'male');
const person2 = new person('Sam', 25, 'female');

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
console.log(person2.gender); // "Sam"