//scopes

//**global scopes */

var isim = 'Polat';

function logName(){
    var isim ='Oğuzhan'
    console.log('function scope',isim);

}

console.log(age);

if(true){
    console.log(isim);
}
logName()
console.log(isim);
console.log(window);

/* Local Scopes */

//Fonksiyonlar kendi scope'larını oluşturur.
//Block'lar teni scope oluşturmaz.
//ES6 ile gelen let ve const block scope oluşturur.

console.log('****************');


if(true){
    var model ='Opel';
    let year =2016;
    const color ='white';

    console.log('block scope',model,year,color)

}
console.log(model);

var i = 1;

for(var i=0; i<10; i++){
    console.log('i',i)
}
console.log(i)