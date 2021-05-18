const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function () {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        this.bmi = this.mass / this.height**2;
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})`);
}