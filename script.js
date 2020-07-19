// Part 1

let login = prompt('Начало регистрации. Придумайте имя пользователя');
let password = prompt('Придумайте пароль');

let userData = {
    login,
    password,
}

let currentEnterLogin = prompt('Введите имя пользователя');

while (currentEnterLogin !== userData.login) {
    currentEnterLogin = prompt('Такой пользователь не зарегистрирован. Введите имя пользователя.');
} 

let currentEnterPassword =  prompt('Введите пароль');

while (currentEnterPassword !== userData.password) {
    currentEnterPassword = prompt('Неправильный пароль. Введите пароль.');
} 

alert('Вы успешно зашли на сайт');

// Part 2

let login;
let password;
let currentLogin;
let currentPassword;

let userData = {
    login,
    password,
}

login = prompt('Начало регистрации. Придумайте имя пользователя');

escape:
while (true) {

    registration:
    while (true) {
        if (login === '') {
            login = prompt('Поле не должно быть пустым. Пожалуйста, придумайте имя пользователя.');
    
        } else if (login === null) {
            alert ('Отмена регистрации.');
            break escape;
    
        } else {
            password = prompt('Придумайте пароль'); 

            while (true) {
                if (password === '') {
                    password = prompt('Поле не должно быть пустым. Пожалуйста, придумайте пароль.');
        
                } else if (password === null) {
                    alert ('Отмена регистрации.');
                    break escape;
        
                } else break registration;
            }
        }
    }

    userData.login = login;
    userData.password = password;

    currentLogin = prompt('Введите имя пользователя');

    while (true) {

        if (currentLogin === userData.login) {
            currentPassword = prompt('Введите пароль');
    
            while (true) {
                if (currentPassword === userData.password) {
                    alert('Вы успешно зашли на сайт');
                    break escape;

                } else if (currentPassword === '') {
                    currentPassword = prompt('Поле не должно быть пустым. Пожалуйста,введите пароль.');

                } else if (currentPassword === null) {
                    alert('Отменено');
                    break escape;

                } else {
                    currentPassword = prompt('Неправильный пароль. Введите пароль.');
                }
            }
            
        } else if (currentLogin === '') {
            currentLogin = prompt('Поле не должно быть пустым. Пожалуйста, введите имя пользователя.');
    
        } else if (currentLogin === null) {
            alert('Отменено');
            break escape;

        } else {
            currentLogin = prompt('Такой пользователь не зарегистрирован. Введите имя пользователя.');
        }
    }
}

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