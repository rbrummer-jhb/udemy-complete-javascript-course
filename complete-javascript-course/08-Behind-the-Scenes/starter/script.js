'use strict';

// function calcAge(birthYear) {
//     const age = 2077 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
        
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const firstName = 'Sherlock';
//             const str = `Oh, and you're a millennial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//             output = 'NEW OUTPUT';
//         }
//         console.log(output);
//     }
//     printAge();

//     return age;
// };

// const firstName = 'John';
// calcAge(1991);



// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'root';
// let job = 'intern';
// const year = 1997;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// };

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;


// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2077 - birthYear);
//     console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2077 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1991);

// const john = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2077 - this.year);
//     }
// }
// john.calcAge();

// const matilda = {
//     year: 2017,
// };
// matilda.calcAge = john.calcAge;
// matilda.calcAge();

// const f = john.calcAge;
// f();



// const john = {
//     firstName: 'john',
//     year: 1991,
//     calcAge: function() {
//         console.log(2077 - this.year);
        
//         // const self = this;
//         // const isMillennial = function() {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };
        
//         const isMillennial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillennial();
//     },
//     greet: () => console.log(`Hey ${this.firstName}`)
// };
// john.greet();
// john.calcAge();


// // 'arguments' keyword
// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// addArrow(2, 4, 6);



// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// const me = {
//     name: 'J',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me: ', me);


// Primitive Types
// let lastName = 'Smith';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference Types
// const jess = {
//     firstName: 'jess',
//     lastName: 'Williams',
//     age: 27
// };

// const marriedJess = jess;
// marriedJess.lastName = 'Davis';
// console.log('Before marriage: ', jess);
// console.log('After marriage: ', marriedJess);

// marriedJess = {};

const jess2 = {
    firstName: 'jess',
    lastName: 'Williams',
    age: 27,
    fam: ['Alice', 'Boe']
};

const jessCopy = Object.assign({}, jess2);
jessCopy.lastName = 'Davis';

jessCopy.fam.push('May');
jessCopy.fam.push('John');

console.log('Before marriage: ', jess2);
console.log('After marriage: ', jessCopy);
