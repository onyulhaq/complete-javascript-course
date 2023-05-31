'use strict';

/*
let hasDriversLicense = false;
const passTest = true

if (passTest) hasDriversLicense = true

if (hasDriversLicense) console.log(`i can drive :D`)

const interface = 'Audio'

const private = 534


function logger() {
    console.log('My name is Jonas')
}

logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const applejuice = fruitProcessor(5, 0)

console.log(applejuice)


// Function declaration

const age1 = calcAge1(1991)

function calcAge1(birthyear) {
    return 2037 - birthyear
}


console.log(age1)


// function expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear
}

const age2 = calcAge2(1991)

console.log(age1, age2)


// function declaration

function calcAge2(birthyear) {
    return 2037 - birthyear
}

const calcAge3 = birthyear => 2037 - birthyear

const age3 = calcAge3(1991)

console.log(age3)

const yearuntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear
    const retirement = 65 - age
    // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearuntilRetirement(1991, 'Jonas'))




function cutFruitPiece(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiece(apples)
    const orangePieces = cutFruitPiece(oranges)

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`
    return juice
}

console.log(fruitProcessor(2, 3))

*/
/*
function calcAge(birthYear) {
   return 2037 - birthYear
}

function yearuntilRetirement(birthYear, firstName) {
   const age = calcAge(birthYear)
   const retirement = 65 - age
   // return retirement
   // return `${firstName} retires in ${retirement} years`

   if (retirement > 0) {
       return retirement

   } else {
       return -1
   }
}

console.log(yearuntilRetirement(1991, 'Jonas'))
console.log(yearuntilRetirement(1970, 'Mike'))

*/

/*
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

console.log(friends[0]);

console.log(friends[2]);


console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutate the array

friends[2] = 'Jay'

console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends]

console.log(jonas);

function calcAge(birthyear) {
    return 2037 - birthyear
}

const years = [1990, 1967, 2002, 2010, 2018]

console.log(calcAge(years)); 

*/

/*
const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push("Jay")
console.log(friends);
console.log(newLength);

friends.unshift('John')
console.log(friends);

// remove element

friends.pop() // Last element removed
console.log(friends);

friends.shift() // remove first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));


if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

*/
/*

const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name'

console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

// const interest = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')


// if (jonas[interest]) {
//     console.log(jonas[interest]);
// } else {
//     console.log(`Not found`);
// }

jonas.location = 'Protugal'
jonas['twitter'] = '@jonasschmedtman'


console.log(jonas);

// Challenge




console.log(`${jonas.firstName} has ${jonas.friends.length} and his brest friend is called ${jonas.friends[0]}`);

*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : "no"} driver's license`
        return this.summary
    }
}

console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.getSummary());


*/



// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`lifting weights repitition ${rep}`);
// }

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', ' Steven'],
    true
]

const types = []

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i]);
//     // types[i] = typeof jonas[i]
//     types.push(typeof jonas[i])
// }

// console.log(types);

const years = [1991, 2007, 1969, 2020]

const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages)

// continue and break

console.log('-----continue example----');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i]);
}

console.log('-----Break example ---------');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i]);
}



const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', ' Steven'],
]

// we want to start it at 4
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repition ${rep}`);
    }
}
*/

// for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight repition ${rep}`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`lifting weight repition ${rep}`)
//     rep++
// }

let dice = Math.trunc(Math.random() * 6) + 1


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log(`loop is about to end...`)
}



