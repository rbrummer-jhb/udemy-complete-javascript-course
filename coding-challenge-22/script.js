'use strict';

// class Car { 
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     };
// };

// class EV {
//     constructor(make, speed, charge) {
//         Car.call(this, make, speed);
//         this.charge = charge;
//     };

//     set chargeBattery(chargeTo) {
//         this.charge = chargeTo;
//     };

//     accelerate() {
//         this.speed += 20;
//         this.charge -= 14;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
//     };
    
//     brake() {
//         this.speed -= 10;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
//     }
// };

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 14;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

Car.prototype.brake = function() {
    this.speed -= 10;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`Charge is at ${this.charge}%`);
};


const tesla = new EV('Tesla', 120, 23);

console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(10);
tesla.chargeBattery(24);
tesla.brake();
tesla.accelerate();