"use strict";
const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
  };
  
  
  const actions = {
  state: {
  value: 0,
  },
  decrement() {
  this.state.value -= 1;
  },
  increment() {
  this.state.value += 1;
  },
  };
  
  const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  refs.value.textContent = actions.state.value;
  };
  
  refs.counter.addEventListener('click', changeValue);