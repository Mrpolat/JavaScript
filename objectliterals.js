// // //object literals

// // let firstName ='Polat';
// // let lastName ='Uçar';

// // let firstName1='Polat';
// // let lastName1 = 'Uçar';

// let polat = ['polat','uçar',1];

// let cinar = ['oguzhan','uçar',24];


let val;

let person = {

    firstName : 'Polat',
    lastName : 'Uçar',
    age :7,
    hobbies :['music','game'],
    adress :{
        city :'Ankara',
        country :'Türkiye'
    },
    getBirthYear : function(){
        return 2020 - this.age;
    }

};
val = person
val = person.firstName;
val=person.lastName;
val = person['firstName'];
val=person.age;
val=person.hobbies[1];
val = person.hobbies.length;
val = person.adress;
val = person.adress['city'];
val = person.getBirthYear();



console.log(val);


console.log(person);
console.log(typeof person);

let people = [
    
    { firstName:'Polat ',lastName:'Uçar'},
    { firstName:'ömer ',lastName:'Uçar'},
    { firstName:'oğuzhan ',lastName:'Uçar'},

]

val = people[0];
val = people[2].firstName;

for (let i=0; i<people.length; i++){
    console.log(people[i].firstName);
}


console.log(val);
console.log(typeof people);