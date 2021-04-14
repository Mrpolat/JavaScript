/*
Şimdiki tarigin gün ay ve yıl bilgisini yazdırınız

tarih ve saat bilgisini içeren bir date objesi oluşturunuz

1/1/1990 tarihinden bir gün öncesini gösteriniz

iki tarih arasında ki geçen zamanı bulunuz 

her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır? 

yaş hesaplama nasıl yapılır ? 

*/

let tarih = new Date();

console.log(tarih.getMonth()+1 , tarih.getDay() , tarih.getFullYear());

var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010,7,24,14,50,10);

console.log(dtA);
console.log(dtB);

var dtC = new Date ('1/1/1990');
var dayOfmonth = dtC.getDate();
dtC.setDate(dayOfmonth-1);
console.log(dtC);

//iki tarih arasındaki geçen zamanı bulunuz

var start = new Date('1/1/1990');
var end = new Date(1/1/1991);

var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye/60; 
var saat= dakika/60;
var gun= saat/24; 

console.log('milisecond:'+ milisecond);
console.log('saniye:'+ milisecond);
console.log('dakika:'+ milisecond);
console.log('saat:'+ saat);
console.log('gun:'+ gun);

// yaş hesaplama nasıl yapılır? 

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);
console.log(ageDifMs)
console.log(ageDate.getFullYear()-1970);

// console.log(birthday.getTime());
// console.log(Date.now());

//anneler günü
var annelerGunu =new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7)
console.log(annelerGunu);