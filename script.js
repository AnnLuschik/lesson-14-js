// Part 3

var persons = [
    {id: 10, name: 'Vasya', age: 28},
    {id: 11, name: 'Kolya', age: 16, parentId: 14},
    {id: 12, name: 'Anna', age: 37},
    {id: 13, name: 'Zoya', age: 9, parentId: 12},
    {id: 14, name: 'Arkadiy', age: 45},
];
var adults = [];
var underages = [];

for (let i = 0; i < persons.length; i++) {

    if ( persons[i].age >= 18 ) {
        adults.push(persons[i]);
    } else underages.push(persons[i]);

    for (let j = 0; j < persons.length; j++) {

        if  ( persons[i].parentId === persons[j].id ) {
            persons[j].children = persons[i].name;
        }
    }
}

for (let i = 0; i < adults.length; i++) {
    adults[i].profession = prompt(`What is your profession, ${persons[i].name}?`);
}

console.log(adults);
console.log(underages);