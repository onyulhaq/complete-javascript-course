'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    console.log(millenial);
    //add(2, 3)

    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';

calcAge(1991);

// Will not print becaused not in global scope

//console.log(age);
//printAge()

*/

// const myName = 'Jonas';

// if (myName === 'Jonas') {
//   console.log(`jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }

// function addDecl(a, b) {
//     return a + b
// }

// function addExpr(a,b) {
//     return a + b

// }

// var addArrow (a, b) => a + b

// Example

// if (!numProduct) {
//   deleteShoppingCart();
// }

// const numProduct = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

/// Best Practices
// DON"T USE VAR - use let and const
// Declare functions first

/*
var x = 1;
var y = 2;
const z = 3;
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;

console.log(f);

*/

/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1

    // const self = this;

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`), console.log(this);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
 */

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;

friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);

*/

let lastName = 'William';
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName, oldLastName);
const jessica = {
  firstname: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// Copying objects

const jessica2 = {
  firstname: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', ' Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');

jessicaCopy.family.push('John');

console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);
