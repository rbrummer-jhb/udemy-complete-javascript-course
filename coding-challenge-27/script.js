const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + (dogAge * 4));
    const moreThan18HumanYears = humanAges.filter(age => age > 17);
    const averageHumanAge = moreThan18HumanYears.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    
    console.log(humanAges);
    console.log(moreThan18HumanYears);
    console.log(averageHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);