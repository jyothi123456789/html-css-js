// constructor function
class Person {
    constructor() {
        this.name = 'John',
            this.age = 23;
    }
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';
Person.prototype.id = '123';

// prototype value of Person
//console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender, person1.id);
console.log(person2.gender,person2.id);
