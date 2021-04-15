//Operators



const a=10;

const b=5;

let c =3;

//1-Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = c++;
val = --c;

//2-Atama Operatörleri 
val = a;
val += a; // val = val+ a;
val -=a; //val = val -a;
val *=a;
val /=a;
val %=a;

// 3- karşılaştırma operatörleri 

val= a==b;
val = b==c;
val = a === b ;//değer kontrolü ve tip kontrolü yapılıyor;
val = 5 === '5';
val = a!=b;
val = a!==b;
val = a>b;
val = b<a;
val = a>=b;
val = 5>=5;
val = a<=b;

// 4- mantıksal operatörler

    // && (And)

    // t&&t=t
    // t&&f=f
    // f&&f=f
    val= (a>b) && (a>c)
    // || (OR)
    val= (a>b) && (a>c)
    val = (a>b) || (a<c)
    val = !(a>b) 
    // !



console.log(val);
console.log(typeof val);