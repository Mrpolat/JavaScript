
let d = new Date();

let birthday = new Date(1999,1,5);



//Set methods
d.setFullYear(2020);
d.setMonth(8);
d.setDate(20);
d.setHours(10);
d.setMinutes(16);
d.setSeconds(20);



//Get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()-birthday.getMonth());
console.log(d.getDate()- birthday.getDate());

console.log(d)
console.log(typeof d);
