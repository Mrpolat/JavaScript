//20.04.2017 tariginde trafiğe çıkan aracın servis süresleri aşağıda verilmiştir
//bu bilgilere göre servis uyarısı veriniz

var trafigeCikis = new Date('04/20/2016');

trafigeCikis.setHours(0,0,0,0);

var trafiktekiMs = Date.now() - trafigeCikis.getTime;

var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

if(trafiktekiGun<=365){
    console.log('1.servis bakım süreniz geldi');
}
else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
    console.log('2.servis bakım süreniz geldi');
    
}
else if (trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log('3. servis bakım süreniz gelmiştir');
}
else(
    console.log('bilinmeyen bir süre')
)
//-------------------//
console.log(trafiktekiMs);

var result = prompt('who is there ?');

if(result == 'cancel'){
    console.log('cancelled');
}else if(result == 'admin'){
    console.log('welcome admin');
    var password = prompt('enter your password');

    if(password=='cancel'){
        console.log('cancelled');

    }else if(password=='1234'){
        console.log('welcome admin');
    }
    else(console.log('wrong password'))
}
else{
    console.log('i dont know you')
}