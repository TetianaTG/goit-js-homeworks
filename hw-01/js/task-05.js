"use strict";

const China = "Китай";
const creditsChina = 100;
const Chile = "Чили";
const creditsChile = 250;
const Australia = "Австралия"
const creditsAustralia = 170;
const India = "Индия";
const creditsIndia = 80;
const Jamaica = "Ямайка";
const creditsJamaica = 120;
const promptText = "Введите название страны, в которую нужно доставить товар";
let userInput = prompt(promptText);
let message;
if (userInput === null) {
    message = "Отменено пользователем";
} else
switch (userInput.toLowerCase()) {
    case China.toLowerCase(): 
      message = `Доставка в ${China} будет стоить ${creditsChina} кредитов`;
      break;
    case Chile.toLowerCase():
      message = `Доставка в ${Chile} будет стоить ${creditsChile} кредитов`;
      break;
    case Australia.toLowerCase():
      message = `Доставка в ${Australia} будет стоить ${creditsAustralia} кредитов`;
      break;
    case India.toLowerCase():
      message = `Доставка в ${India} будет стоить ${creditsIndia} кредитов`;
      break;
    case Jamaica.toLowerCase():
      message = `Доставка в ${Jamaica} будет стоить ${creditsJamaica} кредитов`;
      break;
    default:
      message = "В вашей стране доставка не доступна";
}
console.log(message);
alert(message);
