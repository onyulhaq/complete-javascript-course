// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;

if (x === 23) console.log(23);

const calAge = (birthYear) => 2037 - birthYear;

console.log(calAge(1990));

*/

const measureKelvin = function (params) {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degree Celsius:'),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
