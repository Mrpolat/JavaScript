//window object

let val;
var a = 10;

function abc(){
    return 0;
};
val = window;

//alert
alert('Merhaba');

//prompt
var b =prompt('sayı girin');
console.log(b);

//confirm
val = confirm('Emin misiiz ?')

if(val){
    console.log('ok');
}else{
    console.log('no');
}
//scroll
val =window.scrollX;
val = window.scrollY;

//location
val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;
val = window.location.search;

window.location.href = 'http.lezzetlirobottarifleri.com';
window.location.reload();
console.log(val);

//navigator