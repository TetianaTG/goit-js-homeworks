'use strict';
import { Theme } from './themes.js';

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('.js-switch-input'),
};

const actions = {
  setCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      refs.body.classList.add(currentTheme);
      currentTheme === Theme.DARK
        ? (refs.switcher.checked = true)
        : (refs.switcher.checked = false);
    }
  },
  switchingTheme() {
    if (refs.body.classList.contains(Theme.DARK)) {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
      return;
    }
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  },
};

actions.setCurrentTheme();
refs.switcher.addEventListener('change', actions.switchingTheme);