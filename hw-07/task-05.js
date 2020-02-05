'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInputName);

function handleInputName() {
  input.value.length > 0
    ? (output.textContent = input.value)
    : (output.textContent = 'незнакомец');
}