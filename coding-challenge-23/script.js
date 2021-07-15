'use strict';

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    accelerate() {
        this.speed += 20;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
    
    brake() {
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
}

class EVCl extends CarCl {
    #charge;
    
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
    
    brake() {
        this.speed -= 10;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Charge is at ${this.#charge}%`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian
.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery(50)
.accelerate();