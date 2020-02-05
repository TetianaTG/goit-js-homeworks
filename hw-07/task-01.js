'use strict';

const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const items = document.querySelectorAll('.item');
items.forEach(item =>
  console.log(
    `Категория: ${item.children[0].textContent}, Количество элементов: ${item.children[1].children.length}`,
  ),
);