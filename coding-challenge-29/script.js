const dogs = [
    { weight: 22, curFood: 25, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
// dogs.forEach(dog => dog['recommendedFood'] = dog['weight'] ** 0.75 * 28);
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));

console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
    
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
    
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
console.log(dogs.some(dog => dog.curFood > (dog.recFood * 0.9) && dog.curFood < (dog.recFood * 1.1)));

// 7.
const okayAmountOfFood = dogs.filter(dog => dog.curFood > (dog.recFood*0.9) && dog.curFood < (dog.recFood*1.1));

console.log(okayAmountOfFood);

// 8.
const dogsSorted = dogs
    .slice()
    .sort((a, b) => a.recFood - b.recFood);

console.log(dogsSorted);