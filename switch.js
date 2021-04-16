//switch statements

let category = 'beyaz eşya';

switch(category){
    case 'telefon' :
        console.log('telefon kategorisi');
    break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
    break;

    default:
        console.log('yanlış kategori')

}



let day;

switch( new Date().getDay()){
    case 0:
        day = 'pazar';
    break;
    case 1:
        day = 'pazartesi';
    break;
    case 2:
        day = 'salı';
    break;
    case 3:
        day = 'çarşamba';
    break;
    case 4:
        day = 'perşembe';
    break;
    case 5:
        day = 'cuma';
    break;
    case 6:
        day = 'cumartesi';
    break;
}

console.log(`bugün günlerden ${day}`);