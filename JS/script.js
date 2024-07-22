'use strict';

let result = 5 + 5 + '5';
console.log(result, typeof result);

let email = 'sivvettix@gmail.com';
console.log(email.includes('@'), email.length);

let my = 'My';
let name = 'name';
let is = 'is';
let fullName = `${my} ${name} ${is} Viktor.`;
console.log(fullName);

let userName = prompt('Ur name?')
alert(`Дякуємо ${userName}! До сплати 300 грн`)