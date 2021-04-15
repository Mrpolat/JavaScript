//Template Literals

const fullnamee = "Polat Uçar";
const cityy = 'Ankara';
const yearsofBirth = 2000;

let val;

val = 'my name is '+fullnamee+
        ' I\'m '+(2020-yearsofBirth)+' years old '+
        ' and I live in '+cityy;

        
//ternary operator
        
val = `my name is ${fullnamee} I'm ${(2020-yearsofBirth>=18)?'over 18':'under 18'} years old and I live in ${cityy}`;

console.log(val)