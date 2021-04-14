/*
    can ve adanın boy ve kg bilgilerini alınız
    alınan bilgilere göre kilo indekslerini hesaplayınız
    formül = kişinin kilosu / boy uzunluğunun karesi
    hesaplanan indeks bilgisine göre karşılaştırma yapınız.
    aşağıdaki tabloya göre can ve ada hangi gruba giriyor ? 

    0-18,4: zayıf
    18,5-24,9 : normal
    25,0 - 29,9 : fazla kilolu
    30,0 -34,9: Şişman(obez)



*/
let IndexCan;
let IndexAda;

const kgCan =60;
const kgAda=40;
 
const boyCan =1.70;
const boyAda =1.50;

IndexAda = (kgAda) / (boyAda*boyAda);
IndexCan = (kgCan) / (boyCan*boyCan);

console.log(IndexAda);
console.log(IndexCan)

let adaHeigherIndex = IndexAda>IndexCan;
let canHeigherIndex = IndexCan>IndexAda;

console.log("Adanın kilo indeksi canın kilo indeksinden daha büyük" + adaHeigherIndex);
console.log("canın kilo indeksi adanın kilo indeksinden daha büyük" + canHeigherIndex);

let adaZayıf = (IndexAda>0) && (IndexAda<=18.4);
let adaNormal = (IndexAda>=18.5) && (IndexAda<=25.9);
let adakilolu = (IndexAda>=26) && (IndexAda<=29.9);
let adasisman = (IndexAda>=30) && (IndexAda<=34.9);

console.log(adaZayıf);
console.log(adaNormal);
console.log(adakilolu);
console.log(adasisman);