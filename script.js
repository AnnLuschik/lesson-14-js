// Part 1 and 2

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
    
        } else if (login.length < 4) {
            login = prompt('Имя пользователя не должно быть короче четырёх символов.'); 

        } else if (login.match(/\W/gu)) {
            login = prompt('Имя пользователя может состоять только из букв латинского алфавита, цифр и нижнего подчеркивания.'); 

        } else {
            password = prompt('Придумайте пароль'); 

            while (true) {
                if (password === '') {
                    password = prompt('Поле не должно быть пустым. Пожалуйста, придумайте пароль.');
        
                } else if (password === null) {
                    alert ('Отмена регистрации.');
                    break escape;
        
                } else if (password.length < 8) {
                    password = prompt('Пароль должен состоять минимум из 8 символов.');

                } else if (password.match(/[^\w\-$!.]/gu)) {
                    password = prompt(`Пароль может состоять только из букв латинского алавита, цифр и символов ' _ ', ' - ', ' $ ', ' ! ', ' . '`);

                } else break registration;
            }
        }
    }

    userData.login = login;
    userData.password = password;
    alert('Регистрация успешно завершена.');

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

// Массив разделяется на взрослых и несовершеннолетних, у взрослых запрашивается профессия
for (let person of persons) {

    if ( person.age >= 18 ) {
        person.profession = prompt(`What is your profession, ${person.name}?`);
        adults.push(person);

    } else underages.push(person);
}
// Родителям прописываются дети
for (let adult of adults) {

    for (let child of underages) {

        if  ( child.parentId === adult.id ) {
            adult.children = child.name;
          }
    }
}

console.log(adults);
console.log(underages);