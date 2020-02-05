'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientsListItems = document.createDocumentFragment();
ingredients.forEach(item =>
ingredientsListItems.appendChild(createListElement(item)),
);

ingredientsList.appendChild(ingredientsListItems);

function createListElement(item) {
const listItem = document.createElement('li');
listItem.textContent = item;
return listItem;
}