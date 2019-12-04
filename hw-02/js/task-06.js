"use strict"

let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    isNaN(input)
      ? alert('Было введено не число, попробуйте еще раз')
      : numbers.push(Number(input));
  }
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }
    alert(`Общая сумма чисел равна ${total}`);
  }