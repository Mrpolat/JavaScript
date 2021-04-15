// otomobil markaları ile bir dizi oluştur

var arr = ["BMW","Mercedes","opel","Mazda"];
var arr2 = new Array("BMW","Mercedes","opel","Mazda")

console.log(arr);
console.log(arr2);

//dizi kaç elemanlıdır
console.log(arr.length);

//dizinin ilk ve son elemanı nedir

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[dizinin.length-1]);

//diziye bir eleman ekleyin

arr[4]="renault";
//yada
arr[arr.length]="renault";
arr[arr.length]="fiat";

arr.push('Toyota');

console.log(arr);

//dizinin başına bir eleman ekleyin
arr.unshift('seat');

//dizinin başından eleman silin

arr.shift('seat');

arr.pop('Toyota');

//dizinin elemanlarını tes çevir

arr.reverse();

//dizinin elemanlarını alfabetik olarak sırala

arr.sort();

//[1,2,5,90] elemanlarını sıralaryın

var numberss = [1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;

}
console.log(numberss.sort(compare));

console.log(numberss.sort());

//opel değeri dizinin bir elemanımıdır?

console.log(arr.indexOf("opel"));


console.log(arr.includes('opel'));

//var str ="chevrolet,dacia";
//ifadesini diziye çevirin
var str ="chevrolet,dacia";
var arr3 = str.split(',');
console.log(arr3);

//oluşturulan 2 dizinin elemanlarını başka bir dizi ile birleştirin

var arr4 = arr.concat(arr3);
console.log(arr4);

//oluşturulan diziden son 2 elemanı siliniz.

console.log(arr4.pop());
console.log(arr4.pop());

console.log(arr4.splice(length-2,2))//6. indisden başlar 2 tane siler

console.log(arr4.slice(6,8));

/* aşağıda verilen eleamanları bir dizi içerisinde saklayınız

        studenta: Polat Uçar 2000
        studentB : ömer faruk 1994
        studentc : oğuzhan turan 1997

*/

var studentA =['polat','uçar',2000];

var studentB = ['ömer','faruk',1994];

var studentC =['Oğuzhan','turan',1997];

var students = [studentA,studentB,studentC];
console.log(students);



