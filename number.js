let val;
val = Number('10');
val= parseInt('10');
val = parseFloat('10.5');
val = parseInt('a10a');

val = isNaN('10') ;
val = isNan("a10");

var num = 10.21312323;
val = num.toPrecision(2);
val = num.toFixed();

val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(2.4);
val = Math.round(2.6);
val = Math.floor(2.4);
val = Math.floor(2.9);
val = Math.sqrt(64);
val = Math.pow(2,3);
val = Math.abs(-100);
val = Math.min(1,2,3,4,5,6);
val = Math.max(3,4,5,6,7,8,9);
val = Math.floor(Math.random()*100+1);

console.log(val);
console.log(typeof val);
