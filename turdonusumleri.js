let num1= Number ('5');

console.log(typeof num1);

let num2= Number('10');

console.log(num1 + num2);

let total =num1+num2;

console.log(typeof total)

let val;

//number to string

val = String(10);
console.log(val);
console.log(typeof val);

//bool to string

val = String(true);

console.log(val.length);

//date to string

val = String(new Date());

console.log(val);
console.log(typeof val);

//array yo string

val=String([1,2,3,4]);

//toString()

val = (10).toString();
val = (false).toString();

console.log(val);
console.log(typeof val);

//string to numer

val = Number('10');

val= Number (true);

val = Number(false);

val= Number(null);

val=Number('a');

val= Number([1,2,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.toFixed())

//ParseInt
//ParseFloat

val = parseInt ('10');
val = parseInt ('10.5');
val = parseFloat('10.5')

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));