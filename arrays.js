// arrays

let names = ['polat','uçar','ömer','oğuzhan'];
let years = [2000,1970,1994,1997];
let mix = ['polat','uçar',2000,null,undefined,['sinema','kitap']]; 

//get array item
console.log(names[0]);
console.log(names[3]);

//set array item
names[0] ='emel';

//add item
years.push(1986);
years.unshift(1986);

//remove item
years.pop();
years.shift();

//reverse
names.reverse();

//sort
years.sort();

//concat
let val = years.concat(names);

console.log(val);

//splice

names.splice(2,0,'seda')

//find

//filter

function over18(year) {
    let age = 2018 - year;
    return age>=18;
}
console.log(over18(1990))

//let val = years.find(over18);
let val = years.filter(over18);
console.log(val);



console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);