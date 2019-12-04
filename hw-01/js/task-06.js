"use strict"

let input;
let total = 0;

while (input !== null) {
 input = prompt('Введите число');
 !isNaN(input)
   ? (total += Number(input))
   : alert('Было введено не число, попробуйте еще раз');
}

alert(`Общая сумма чисел равна ${total}`);