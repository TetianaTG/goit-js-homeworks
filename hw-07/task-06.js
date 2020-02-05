'use strict';

const input = document.querySelector('#validation-input');
input.addEventListener('blur', isValidInput);

function isValidInput() {
  if (input.value.length < input.dataset.length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    return;
  }
  input.classList.remove('invalid');
  input.classList.add('valid');
}