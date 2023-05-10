
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas')
console.log('23')

let firstName = 'Jonas'


console.log(firstName)
console.log(firstName)
console.log(firstName)

let years = 3

let PI = 3.1415


let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'jonas')

javascriptIsFun = 'YES!'

console.log(typeof javascriptIsFun)


let year

console.log(year)
console.log(typeof year)

year = 1991

console.log(year)
console.log(typeof year)

console.log(typeof null)





let age = 30

age = 31

const birthYear = 1991

// birthYear = 1992

// const job

var job = 'programmer'

job = 'teacher'

let lastName = 'Schmedtmann'
console.log(lastName)



// math operators
const now = 2037;
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + " " + lastName)

// assignment operators
let x = 10 + 5
x += 10
x *= 4
x /= 20
x++
x--
console.log(x)

//comparison operators

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)


let x, y;
x = y = 25 - 10 - 5

console.log(x, y)

*/

/*

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year-old teacher"

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`

console.log(jonasNew)

console.log(`just a regular string...`)

console.log(`String
multiple
lines`)

*/

/*
const age = 15

if (age >= 18) {
    console.log(`Sarah can start driving license 😎`)
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young, Wait another ${yearsLeft}
years :)`)
}

const birthYear = 2012

let century

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}

console.log(century)


*/

/*
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)


console.log(Number("jonas"))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion

console.log('I am' + 23 + " years old")

console.log('23' - "10" - 3)
console.log('23' + "10" + 3)

console.log("23" * "2")
console.log("23" / "2")


let n = "1" + 1

n = n - 1

console.log(n)



*/

/*


const money = 0

if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job`)
}

*/
/*
const age = 18

if (age === 18) {
   console.log(`you just became an adult - strict`)
}



if (age == '18') {
   console.log(`you just became an adult - loose`)
}

const favorite = Number(prompt("What is your favorite number?"))


console.log(favorite, typeof favorite)

if (favorite === 23) {
   console.log(`Cool! 23 is an amazing number!`)
} else if (favorite === 7) {
   console.log(`Cool! 7 is also a cool number`)
} else {
   console.log(`Number is not 23 or 7`)
}



if (favorite !== 23) {
   console.log(`Why not 23?`)
}




*/

/*
const hasDriverLicense = true
const hasGoodVision = false

console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)

const shouldDrive = hasDriverLicense && hasGoodVision


const isTired = true

console.log(hasDriverLicense || hasGoodVision || isTired)



if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Somebody else should drive`)
}


*/


//////////////// Switch Statment

/*
const day = 'monday'

switch (day) {
    case 'monday': // day === 'monday'
        console.log(`plan course structure`)
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Record video')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break
    default:
        console.log('Not a valid day')
}

*/

///// Condition

const age = 23

age >= 18 ? console.log(`I like to drink 🍷`) :
    console.log(`I like to drink water 💧💧`)

const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
console.log(drink)


