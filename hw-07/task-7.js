'use strict';

const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener('input', handleSizeControl);

function handleSizeControl() {
  text.style.fontSize = `${(sizeControl.valueAsNumber / 100) * 32}px`;
}