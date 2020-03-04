'use strict';
import menuItems from '../menu-data/menu-items';
import menuItemTemplate from '../templates/menu-item-template.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const createMarkUp = (template, arrOfItems, parent) => {
  const markUp = arrOfItems.map(item => template(item)).join('');
  parent.insertAdjacentHTML('beforeend', markUp);
};

createMarkUp(menuItemTemplate, menuItems, refs.menuList);