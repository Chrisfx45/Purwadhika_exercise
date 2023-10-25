let length = 5;
let width = 4;
let area = length * width;
console.log ('area =', area);

let perimeter = (length* 2) + (width *2)
console.log('perimeter =', perimeter)

let radius = 2;


console.log ('circumfences =', Math.PI*radius *radius );


let a = 80;
let b = 10;
let c = 180 - a -b;

console.log('unknown angle is', c);


const one_day =24 * 60 * 60 * 1000;
const date1 = new Date (2020, 10, 15);
const date2 = new Date (2020, 11, 25)

diff = Math.round(Math.abs(date1-date2)/one_day);

console.log('diff is', diff);


let days = 400;

console.log("years", Math.round(days/365), "month", Math.round
((days%365)/ 30), "days", Math.round(((days%365)%30) ))
