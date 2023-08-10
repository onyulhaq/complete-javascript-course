'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliver({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////// Lecture 125: String Practice

const flightsArray = flights.split('+');

const getLetters = str => str.replace(/\d/g, '').toUpperCase();

for (const flight of flightsArray) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getLetters(from)} to ${getLetters(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

console.log();

////////// Lecture 124: Coding Challenge #4

/*

////////// Lecture 123: Working with Strings Part 3

//Split and Join
console.log('a+very+nice+string'.split('+')); // makes an array
console.log('Jonas S'.split(' ')); // makes an array

const [firstName, lastName] = 'Jonas Schmidt'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemdt');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(564654));
console.log(maskCreditCard(56465484763287));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));
/*
////////// Lecture 122: Working with Strings Part 2
const airline = 'TAP Air Protugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io\n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

//Replacing Strings

const priceGB = '288,97';
const priceUS = priceGB.replace(',', '.');
console.log(priceUS);

// Replace all
const announcement =
  ' All passengers come to boarding door 23. Boarding door 23';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus Family');
}

// Practice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(`keep that mf off the plane - he's got a weapon`);
  } else {
    console.log("You're good");
  }
};

checkBaggage('I have a laptop, some Food and a pcket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
/*
////////// Lecture 121: Working with Strings Part 1

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('A320'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// When to grab the rest of the string
console.log(airline.slice(4));
console.log(airline.slice(4, 9));

// Extract first word
console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Extract first word
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got a middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

////////// Lecture 120: Coding Challenge #3

////////// Lecture 119: What Data structure to use

// Objects vs Maps:

// Maps when you need to map keys to Values & when you need keys that are not strings

// Objects should be used when you include functions or working with Json

// should use arrays instead of sets when you need to manipulate data or ordered values

// Use sets when dealing with unique values

// simple list - use array or sessionStorage

// Key/Value pairs - use object or maps

/*

////////// Lecture 118: Maps - Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try agains'],
]);

// console.log(Object.entries(openingHours));

// Can use Object entries to make a map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Get just some values use typeof

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// Plug in somebody;s answer
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array

console.log(...question);
console.log(...question.keys());
/*
////////// Lecture 117: Maps - Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Libson, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1, 2]));

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
/*

////////// Lecture 116: Sets - Fundamentals

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

// Use size not lenght
// Amount of different elements in array
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//Use Spread operator to make array out of Set
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
/*











//Property Names
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}`;
}

console.log(openStr);
//Property Values

const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/////////////////////////////////

//Coding Challenge #2

/*




if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open)

// With optional chaining
// ONLY READS open if all the preceding stuff before the question mark is not null or undefined
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisatto?.(0, 1) ?? 'Method does not exist');

// Array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

/*



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());

/*

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  Owner: 'Giovanni Rossi',
};

//Or Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

rest1.numowner &&= 'Anonoymous';
rest2.numowner &&= 'Anonoymous';

console.log(rest1);
console.log(rest2);

/*






console.log('-----OR -----------');

// Use Any data type, return any type, and short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(true || null);

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guest2 = restaurant.numGuests || 10;

console.log(guest2);

console.log('------ And ---------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Jonas' && 0);

console.log('Hello' && 23 && null && 'ony');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;

console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);

// 2 Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(8, 2, 6, 4, 6, 3);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays strings maps, sets. not Objects

const str = 'Jonas';

const letters = [...str, ' ', 's.'];

console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Rstorante Roma';

console.log(restaurantCopy.name, restaurant.name);
/*
restaurant.orderDeliver({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliver({
  time: '22:30',
  address: 'Via de Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

//Nested objects

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

// const [first, second] = restaurant.categories;

// console.log(first, second);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values

const [p = 1, q = 1, r = 1] = [8];

console.log(p, q, r);
*/
