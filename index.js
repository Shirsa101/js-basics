let name1 = 'John';
let name2 = name1;

name2 = 'Doe';

console.log('name1 : ' + name1);
console.log('name2 : ' + name2);


let person1 = {
    name : 'John'
}

let person2 = person1;

person2.name = 'Doe';

console.log('person1 name : ' + person1.name);
console.log('person2 name : ' + person2.name);
