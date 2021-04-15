//uyguluma : String

var sentence = "template literals or template strings is the ability have multi-line strings without any funny business.  ";

var url = "http://lezzetlirobottarifleri.com arduino programlama"

//cümle kaç karakterlidir? 

console.log(sentence.length);

// kaç kelimden oluşuyor

console.log(sentence.trim().split(' '));

//tüm cümleyi küçük harfe çevir

console.log(sentence.toLowerCase());

//cümlenin başındaki ve sonundaki boşlukları silin;

console.log(sentence.trim());

// '-' karakterini siliniz;

console.log(sentence.replace('-','')); //- işaretini hiç birşey ile yer değiştiri

//url içinden str kısmını siliniz

var str = 'http://';

console.log(url.substr(str.length));
console.log(url.slice(str.length));

//url hangi protocolu kullanmaktadır

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

//url .com ifadesi içeriyor mu ? 

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

//url string ifadesini ge.erli bir url olarak düzenleyin

console.log(url.toLowerCase().replace(/ /g,'-').replace(/ı/g,'i'));