'use strict';

// Data needed for a later exercise
// const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({ 
    starterIndex,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(i1, i2, i3) {
      console.log(`Here is your pasta with ${i1} ${i2} and ${i3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



// // Property NAMES
// const properties = Object.keys(restaurant.openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// // console.log(openStr);

// // Property VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(`VALUES`);
// console.log(values);

// // Entire Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(`ENTRIES`);
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }



// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant?.openingHours);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // For Loop
// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [
//   {name: 'J', email: 'agent@j.com'}
// ];

// console.log(users[0]?.name ?? 'User array empty');



// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log(null ?? undefined ?? 0 ?? '');

// console.log(3 || 'John');
// console.log('' || 'John');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`---- AND ----`);
// console.log(0 && 'J');
// console.log(7 && 'J');
// console.log('Hello' && 23 && null && 'j');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');



// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7];
// add(...x);



// restaurant.orderDelivery({
//   time: '22:30',
//   address: '123 street',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: '123 street',
//   starterIndex: 1
// });

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'), 
//   prompt('Ingredient 2?'), 
//   prompt('Ingredient 3?')
// ];

// restaurant.orderPasta(...ingredients);


// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(newRestaurant.name);
// console.log(restaurantCopy.name);

// const arr = [2,3,4]
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// destructuring saves us from switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const  [i, ,j] = nested;
// console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i,j,k);

// Setting Default values
// this is useful for when data is coming from an API
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);



// Object destructuring
// const agent = {
//   name: 'J',
//   age: 30,
//   partners: ['K', 'worms', 'Z']
// };

// const { name, age, partners } = agent;
// console.log(name, age, partners);

// const { name: agentName, age: agentAge, partners: agentPartners } = agent;
// console.log(agentName, agentAge, agentPartners);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({a, b} = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// Shallow Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = "somestring";
// const letters = [...str];
// console.log(letters);



// // SETS
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// console.log(new Set('John'));
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);
// console.log(new Set(staff).size);
// console.log(new Set('abcdefg').size);



// Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test')
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again']
// ]);
// console.log(question);


// Convert object to map
// console.log(Object.entries(restaurant.openingHours));

// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());




// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jAnE';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'agent@j.com'
// const loginEmail = '    Agent@J.com \n'

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(email);
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// // Replacement
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceGB);
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// // regex
// console.log(announcement.replaceAll(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the new Airbus family');

// // Practice
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   console.log(baggage.includes('knife') || baggage.includes('gun') ? `You are not allowed onboard` : `Welcome onboard`);
// }
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and a camera');
// checkBaggage('Got some snacks and a gun for protection');

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   console.log(s === 'B' || s === 'E' ? `You got the middle seat` : `You got lucky`);
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('John'));
// console.log(typeof new String('John'));
// console.log(typeof new String('John').slice(-1));

// console.log('a+very+nice+string'.split('+'));
// console.log('Jane Doe'.split(' '));
// const [firstName, lastName] = 'Jane Doe'.split(' ');

// const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('jess ann smith davis');
// capitalizeName('jane doe');

// // Padding
// const message = `Go to gate 23`;
// console.log(message.padStart(25, "+").padEnd(35, '+'));
// console.log('jane'.padStart(25, "+").padEnd(35, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(234758175));
// console.log(maskCreditCard(1652467153467156745));
// console.log(maskCreditCard('sdahfgjahfjghajkfga'));

// // Repeat
// const notice = 'Bad weather... All departures delayed... ';
// console.log(notice.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);





// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log( flights.split('+') );


const getCode = str => str.slice(0,3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : '🟢'}${type.replace(/_/g, ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}