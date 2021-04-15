var num = 15.123456789;
// toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3));

//ondalık kısmı 3 basamakta sınırla
console.log(num.toFixed(3));

//en yakın sayıya yuvarla

console.log(Math.round(num));

//aşağı yuvarla

console.log(Math.floor(num));

//yukarı yuvarla
console.log(Math.ceil(num));

//1,2,10,56,20 en büyük değer hangisi

console.log(Math.max(1,2,10,56,20));

// sayı aralığını kullanıcının belirleyeceği rastgele sayı üret

var min = 50;

var max = 100;

console.log(min+ Math.random()*(max-min));

/*
bir personelin yaptığı mesai ye göre aldığı maaşı hesaplayalım 
brüt maaş:3700
brüt mesai:10.3
ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir
brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir


*/

var brutMaas = 3700;
var mesaiUcreti =10.3;
var mesaiSuresi =42;

var toplamBrutmaas = brutMaas+(mesaiUcreti*mesaiSuresi);

var toplamNetMaas = toplamBrutmaas - toplamBrutmaas*0.25;


console.log(toplamBrutmaas.toFixed(2),toplamNetMaas.toFixed(2));