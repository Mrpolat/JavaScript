//function Declarations

function sum(a,b){
    var c = a+b;
    return c;

}
console.log(sum(10,20));

//Function expressions

const sum = function(a,b){

    if(typeof a == 'undefined'){
        a=0;
    }
    
    if(typeof b == 'undefined'){
        b =0;
    }
    var c =a+b;
    return c;
}


//ES6 defauld parameters

const sum = function(a=0,b=0){
    var c = a+b;
    return c;
}

function args(){
    console.log(arguments);
}
args(10,20,30)
console.log(sum(10,30));

function sumAll(){
    var total = 0;
    for(let i=0; i<arguments.length;i++){
        total+=arguments[i]
    }
    return total;
}

console.log(sumAll(10,20,30,10,30));