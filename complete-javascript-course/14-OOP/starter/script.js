'use strict';

// CONSTRUCTOR FUNCTIONS

// Constructor functions always start with an uppercase letter.

// 1. New {} is created.
// 2. Function is called, this = {}.
// 3. {} is linked to a prototype.
// 4. Function automatically returns {}.

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
    
//     // Never create a method inside a constructor function like this.
//     this.calcAge = function() {
//         console.log(2077 - this.birthYear);
//     }
// };

// These are instances of 'Person'.
// const jane = new Person('Jane', 1990);
// const john = new Person('John', 1991);
// const jack = new Person('Jack', 1992);
// console.log(jane, john, jack);

// console.log(jane instanceof Person);

// Person.hey = function() {
//     console.log(`Hey there 👋`);
//     console.log(this);
// }
// Person.hey();



// PROTOTYPES

// console.log(Person.prototype);
// Person.prototype.calcAge = function() {
//     console.log(2077 - this.birthYear);
// }

// jane.calcAge();
// john.calcAge();
// jack.calcAge();

// console.log(jane.__proto__);
// console.log(jane.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jane));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jane.species, john.species);

// console.log(jane.hasOwnProperty('firstName'));
// console.log(jane.hasOwnProperty('species'));

// Prototype Chain
// console.log(john.__proto__);
// console.log(john.__proto__.__proto__);
// console.log(john.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 3, 3, 7, 7, 8, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// }
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(x => x + 1);



// ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
    // Methods will be added to the prototype property.
//     calcAge() {
//         console.log(2077 - this.birthYear);
//     }

//     get age() {
//         return 2077 - this.birthYear;
//     }

//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log(`Hey there 👋`);
//         console.log(this);
//     }
// }
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

// const jess = new PersonCl('Jess Davis', 1990);

// console.log(jess);
// jess.calcAge();
// console.log(jess.age);
// console.log(jess.__proto__ === PersonCl.prototype);

// jess.greet();

// 1. Classes are NOT hoisted.
// 2. Classes are first-class citizens.
// 3. Classes are executed in strict mode.

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

// const account = {
//     owner: 'jane',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);



// const PersonProto = {
//     calcAge() {
//         console.log(2077 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();



// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//     console.log(2077 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Person);
// console.log(mike instanceof Student);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);



// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };

//     calcAge() {
//         console.log(2077 - this.birthYear);
//     };

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     };

//     get age() {
//         return 2077 - this.birthYear;
//     };

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name!`);
//     };

//     get fullName() {
//         return this._fullName;
//     };

//     static hey() {
//         console.log(`Hey there 👋`);
//     };
// };

// // The 'extends' keyword links the prototypes.
// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first.
//         super(fullName, birthYear);
//         this.course = course;
//     };

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}.`);
//     };
//     // This overrides the parent's method called 'calcAge'.
//     calcAge() {
//         console.log(`I'm ${2077 - this.birthYear} years old, but I feel more like ${2077 - this.birthYear + 10}`);
//     };
// };

// const martha = new StudentCl('Martha Jones', 2010, 'Computer Science');
// martha.introduce();
// martha.calcAge();




// const PersonProto = {
//     calcAge() {
//         console.log(2077 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };

// StudentProto.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const jane = Object.create(StudentProto);
// jane.init('Jane', 2010, 'Computer Science');
// jane.introduce();
// jane.calcAge();




// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// There is also the static version

class Account {
    // Public fields
    locale = navigator.locale;
    
    // Private fields
    #movements = [];
    #pin;
    
    
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this.#pin = pin;
        // this.#movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    // Public interface (public methods)
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // Static methods are only available on the class itself and not on the instances.
    static helper() {
        console.log('Helper');
    }
    
    // Private methods
    _approveLoan(val) {
        return true;
    }
};

const acc1 = new Account('Jane', 'EUR', 1111);

acc1.deposit(50);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.#pin);
Account.helper();

// Chaining 
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());