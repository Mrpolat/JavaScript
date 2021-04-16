//functions

function yasHesapla(dogumYili){
   return 2021-dogumYili;
}

let val = yasHesapla(1983);

console.log(val);

function emekligeKacYilKaldi(dogumyili,isim){
    let yas = yasHesapla(dogumyili);
    let emeklilik = 65-yas;

    if(emeklilik>0){
        console.log(`${isim}Emekli olmanıza ${emeklilik} yıl kaldı`);
    }else{
        console.log('Zaten emekli oldunuz');
    }
}

emekligeKacYilKaldi(2012,'Polat');

