//CommonJs, every fiel is module (by default)
//Modules - Encapsulated Code (only share minimum)
// const secret = 'SUPER SECERET';
// const john = 'seela';
// const peter = 'vijayan';

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }
const names = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names);
const data = require('./6-alternative-flavor');
// console.log(data);
require('./7-mind-grenade');

// sayHi('susan');
// sayHi(names.firstName);
// sayHi(names.lastName);