'use strict';
/*
const bookings = [];

 const createBooking = function(flightNum, numPassengers=1, price=199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199; 
    const booking = {
         flightNum,
         numPassengers,
         price
     }
     console.log(booking);
     bookings.push(booking);
 }

 createBooking('LH123');
 createBooking('LH123', 2, 800);
 createBooking('LH123', 2);
 createBooking('LH123', 5);
 createBooking('LH123', undefined, 1000);
 */



 /*
const flight = 'LH123';
const jane = {
    name: 'Jane Doe',
    passport: 123445674389
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mrs ' + passenger.name;

    if (passenger.passport === 123445674389) {
        alert('Check in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, jane);
console.log(flight);
console.log(jane);

const flightNum = flight;
const passenger = jane;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jane);
checkIn(flight, jane);
*/



/*
// 'HIGHER ORDER' FUNCTIONS

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// this is a 'high-order' function because it accepts another function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
    console.log(`🙋‍♀️`);
}
document.body.addEventListener('click', high5);

['John', 'Jane', 'Joe'].forEach(high5);
*/



/*
// FUNCTIONS RETURNING OTHER FUNCTIONS

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}


const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jane');
greeterHey('John');

greet('Hello')('Jane');
*/



/*
// THE CALL AND APPLY METHODS

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Jane Doe');
lufthansa.book(239, 'John Doe');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams');
book.call(eurowings, 23 , 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Joe Doe');
bookEW23('Martha Cooper');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVat = addTaxRate(0.23);
console.log(addVat(100));
console.log(addVat(23));
*/



/*
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

const runOnce = function() {
    console.log(`This will never run again`);
}
runOnce();

// This pattern is called the Immediately Invoked Function Expression (IIFE)
(function() {
    console.log(`This will never run again`);
    const isPrivate = 23;
})();

(() => console.log(`This will also never run again`))();
*/




// CLOSURES

const secureBooking = function() {
    let passengerCount = 0;
    
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();


// Example 1
let f;

const g = function() {
     const a = 23;
     f = function() {
         console.log(a * 2);
     }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
h();
f();
console.dir(f);


// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);