"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Введите, пожалуйста, пароль');
let message
 
switch (userInput) {
    case null:
     message = "Отменено пользователем!";
     break;
    case 'jqueryismyjam':
     message = "Добро пожаловать!";
     break;
    default:
     alert ("Доступ запрещен, неверный пароль!");
}
alert (message);
