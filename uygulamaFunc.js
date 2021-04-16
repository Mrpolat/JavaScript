// uyguluma func


 var hesapA = {
        ad : 'polat uçar',
        hesapNo :'12345678',
        bakiye : 2000,
        ekHesap :1000
 }

 var hesapB = {
             ad : 'ömer uçar',
            hesapNo :'12345679',
             bakiye : 3000,
            ekHesap :2000
 }


 function paraCek(hesap,miktar){
     console.log(`Merhaba ${hesap.ad}`);

     if(hesap.bakiye>=miktar){
         hesap.bakiye = hesap.bakiye -miktar;
         console.log('paranzı alabilirsiniz');
     }
     else{
         var toplam = hesap.bakiye + hesap.ekHesap;

         if(toplam>=miktar){
             if(confirm('ek hesabınızı kullanmak istermisiniz ?'))
             {
                 console.log('paranızı alabilirsiniz');
                 var bakiye = hesap.bakiye;
                 var ekhesap = miktar-bakiye;
                 hesap.bakiye=0;
                 hesap.ekHesap=hesap.ekHesap-ekhesap;

             }
             else{
                 console.log(`${hesap.hesapNo} nolu hesabınızdan ${miktar} bulunmamaktadır.`);
             }
         }else{
             console.log('üzgünüz bakiye yetersiz');
         }
     }
 }

    paraCek(hesapA,2000)