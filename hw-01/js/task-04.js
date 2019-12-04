"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const promptInfo = `Cколько дроидов Вы желаете приобрести? Важно указать колличество`;
let userAnswer = prompt(promptInfo);
let message;

if (userAnswer === null) {
    message = "Отменено пользователем!";
  } else {
    let totalPrice = Number(userAnswer) * pricePerDroid;
    if (totalPrice > credits) {
      message = "Недостаточно средств на счету!";
    } else {
        const balance = credits - totalPrice;
        message = `Вы купили ${userAnswer} дроидов, на счету осталось ${balance} кредитов.`;
      }
    }
    console.log(message);
    alert(message);
   